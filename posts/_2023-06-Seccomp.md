

Linux kernel documentation about Seccomp:
https://www.kernel.org/doc/html/latest/userspace-api/seccomp_filter.html

- No new privileges. When executing with `execve`, inherit the limitations.

```C
prctl(PR_SET_NO_NEW_PRIVS, 1, 0, 0, 0);
```

(Pequeño digress por la documentación de [Landlock](https://docs.kernel.org/userspace-api/landlock.html), un sandbox para el sistema de ficheros con mucho control.)

```C
prctl(PR_SET_SECCOMP, SECCOMP_MODE_FILTER, prog);
```

`prog` tiene tipo `struct sock_fprog`, que contiene el filtro.

## Los programas

Los programas son difíciles de escribir, porque estan en un "assembler" que se llama BPF (Berkeley Packer Filter (language), https://www.kernel.org/doc/Documentation/networking/filter.txt), que luego se compila a ensamblador con un JIT. 

```C
struct sock_filter filter[] = {
  /* seccomp(2) says we should always check the arch */
  /* as syscalls may have different numbers on different architectures */
  /* see https://fedora.juszkiewicz.com.pl/syscalls.html */
  /* for simplicity we only allow x86_64 */
  BPF_STMT(BPF_LD | BPF_W | BPF_ABS, (offsetof(struct seccomp_data, arch))),
  /* if not x86_64, tell the kernel to kill the process */
  BPF_JUMP(BPF_JMP | BPF_JEQ | BPF_K, AUDIT_ARCH_X86_64, 0, 4),
  /* get the actual syscall number */
  BPF_STMT(BPF_LD | BPF_W | BPF_ABS, (offsetof(struct seccomp_data, nr))),
  /* if "uname", tell the kernel to return EPERM, otherwise just allow */
  BPF_JUMP(BPF_JMP | BPF_JEQ | BPF_K, SYS_uname, 0, 1),
  BPF_STMT(BPF_RET | BPF_K, SECCOMP_RET_ERRNO | (EPERM & SECCOMP_RET_DATA)),
  BPF_STMT(BPF_RET | BPF_K, SECCOMP_RET_ALLOW),
  BPF_STMT(BPF_RET | BPF_K, SECCOMP_RET_KILL),
};
```

## Libseccomp

No hace falta escribir estos programas a mano porque libseccomp los escribe por tí, usando reglas más simples.

Para bloquear la llamada sistema `uname` deberíamos escribir solo:

```C
scmp_filter_ctx seccomp_ctx = seccomp_init(SCMP_ACT_ALLOW);
if (!seccomp_ctx) {
  err(1, "seccomp_init failed");
}
if (seccomp_rule_add_exact(seccomp_ctx, SCMP_ACT_KILL, 
                           seccomp_syscall_resolve_name("uname"), 0)) {
  perror("seccomp_rule_add_exact failed");
  exit(1);
}
if (seccomp_load(seccomp_ctx)) {
  perror("seccomp_load failed");
  exit(1);
}
seccomp_release(seccomp_ctx);
```

## systemd-run

Se puede usar `systemd-run` para ejecutar procesos con un filtro de syscalls de forma que no hay que escribir ningún programa.

Pero `systemd-run` lo que hace es hacer un `fork` de su proceso, poner los filtros de syscalls con seccomp y finalmente hacer un `execve`, para lo cual necesita la llamada a sistema `execve`, llamada que no queremos pasarle al proceso que estamos conteniendo.

## Cloudflare Sandbox

https://github.com/cloudflare/sandbox

Un sistema hecho por Cloudflare para no tener que programar el sandbox y que se pueda colocar en cualquier binario.

Tiene dos modalidades:

1. `libsandbox.so`, para ejecutables compilados con librerías dinámicas. Se usa LD_PRELOAD para cargar esa librería que hará el filtrado del proceso durante el proceso de inicialización.

2. `sandboxify`, para ejecutables estáticos. Se usa `ptrace` y una opción `PTRACE_O_SUSPEND_SECCOMP`, que permite suspender seccomp, poner los filtros, y luego levantar la suspensión. Eso libera de tener que permitir `execve`, pero requiere capacidad de administrador (`CAP_SYS_ADMIN`).

Ambos programas miran las variables de entorno para saber qué hacer:
- `SECCOMP_SYSCALL_ALLOW`: una lista separada por `:` de los nombres de las syscalls que se permiten.
- `SECCOMP_SYSCALL_DENY`: una lista separada por `:` de los nombres de las syscalls que se deniegan.
- `SECCOMP_DEFAULT_ACTION`: la acción por defecto típicamente usada para poner `log` y mirar qué syscalls necesita cierto proceso.

El caso general sería el del binario estático porque muchos lenguajes es lo que producen.

El problema que tiene Cloudflare Sandbox es que no permite filtrar los syscalls por los parámetros que tienen, y esto es interesante para no permitir `execve` excepto en el caso en que el jail ejecuta al reo, digamos. No queremos que el reo ejecute `execve` pero al heredarse los límites, entonces si permitimos `execve` el reo podría ejecutar otras cosas, potencialmente maliciosas.

## Qué necesitas en un jail para un sistema educativo?

Lo esencial:
- Que sea un buen sandbox. Filtrar el máximo de syscalls. Seccomp.
  Que filtre 'execve', por descontado.
- Que limite los recursos: tiempo, CPU, memoria, pila.
En esto el Jailer de los chinos estaba muy bien.

Extras:
- Que mida los tiempos y produzca estadísticas.
- Que dé errores concretos para cada caso (con los syscalls es difícil).

## SORPRESA: No podemos hacer el jail en Go XD

Go no tiene la llamada `fork` porque al tener un sistema de threads, el `fork` obliga a hacer un `exec` inmediatamente (https://stackoverflow.com/a/28371586/19108833).

Dudo que Rust deje hacer eso mismo... así que lo haremos en C... tal como el Jailer original estaba.