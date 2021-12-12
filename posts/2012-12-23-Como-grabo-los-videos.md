---
layout: post
title: Cómo grabo los vídeos
where: Sant Cugat
---

Mucha gente me pregunta sobre cómo hago
[los vídeos](http://youtube.com/paueky). Y la verdad es que he pasado
bastante tiempo puliendo la forma de hacerlo para que queden todo lo
bien que un perfeccionista necesita para estar tranquilo. Este *post*
es para explicar cómo lo hago. Intento utilizar sólo
[Software Libre](http://es.wikipedia.org/wiki/Software_libre).

## Herramientas

Lo hago todo desde [Ubuntu Studio](http://ubuntustudio.org/):

* En una ventana ejecuto una máquina virtual con
  [VirtualBox](http://www.virtualbox.com). Instalo Linux o Windows en
  esa máquina virtual y también los controladores específicos de
  VirtualBox, que permiten redimensionar la ventana a una resolución
  arbitraria. La resolución que pongo siempre es 1280 por 720 píxeles, o sea "HD
  Ready". También lanzo la máquina virtual desde la línea de comandos
  de Linux (con VBoxSDL), para que no tenga nada más que el borde exterior.

* Detrás hay otra ventana algo más grande con
  [MyPaint](http://mypaint.intilinux.com/), y para pintar tengo una
  tableta [Wacom Intuos 4](http://101.wacom.com/sp/intuos/) con el
  lápiz siempre a mano. A MyPaint le pongo un fondo tipo pizarra y
  configuro el lápiz para que parezca tiza, que es francamente
  sencillo y queda aún mejor. Antes de descubrir MyPaint utilizaba el
  [Gimp](http://www.gimp.org/). Lo bueno es tener las dos ventanas es
  que si MyPaint es más grande, al cambiar de ventana y poner MyPaint
  al frente, el vídeo entero es pizarra, cosa que me gusta mucho y
  creo que ayuda a la concentración. Y así puedo pasar del código a la
  pizarra fácilmente.
  
* Tengo unos auriculares
  [Sennheiser PC31](http://www.amazon.com/Sennheiser-PC-31-Stereo-Headset/dp/B001L6G326)
  que llevo puestos durante la grabación con el micrófono bastante
  cerca de la boca pero un poco por encima del labio superior
  (intentando así evitar los soplidos).
  
* Utilizo un programa de captura llamado
  [RecordMyDesktop](http://recordmydesktop.sourceforge.net/about.php),
  y en particular la versión GTK. Con él se puede capturar una ventana
  particular sin el borde, de ahí que use VBoxSDL para lanzar la
  máquina virtual. Tengo configurado RecordMyDesktop para que comprima
  el vídeo al final, no durante la grabación. La verdad es que ocupa
  mucho más espacio en el directorio temporal y cuando acabas la
  grabación se pasa codificando el vídeo un rato que me parece
  interminable, pero la calidad de esta manera es casi immejorable.
  
## Ubuntu Studio
  
La razón de usar [Ubuntu Studio](http://ubuntustudio.org/) es que hace
algún tiempo descubrí que instalando un kernel de Linux "real-time" el
audio quedaba mucho mejor sincronizado con el vídeo. También conseguí
evitar un problema que sucedía con cierta frecuencia (y lo achaco a
RecordMyDesktop), y era que el vídeo perdía el audio hacia la mitad de
la grabación. Creo que hay un vídeo del tema de C++ que aún está así,
porque me dí cuenta tarde y ya no encontré tiempo de volverlo a
grabar. De hecho tiré a la basura muchísimos vídeos debido a este
problema. En mi ordenador, de hecho, tengo Ubuntu Studio especialmente
para grabar vídeos (normalmente utilizo
[Debian](http://www.debian.org)), cosa que me ayuda bastante a centrarme
cuando me pongo a grabar.

Otra cosa que ha mejorado automáticamente con Ubuntu Studio es el
audio. Tengo la sospecha que Ubuntu Studio tiene una configuración por
defecto para el micrófono que hace algo de
[compresión de rango dinámico](http://es.wikipedia.org/wiki/Compresor_(sonido))
porque la grabación es muchísimo mejor que con un Linux normal
(sobretodo con la distorsión cuando gritas un poco). Entre los
[primeros vídeos](http://www.youtube.com/watch?v=KNiC66HGRoQ&list=PL192B8BBB9A27FC67)
y los del
[curso de Go](http://www.youtube.com/watch?v=D3pBazrwvOo&list=PL-DwF6obA18JuX-1GlaaikOSrO0cjH9HK)
creo que se aprecia la diferencia.

## Sin conversión

Al principio tenía que convertir el vídeo de OGV a MOV (QuickTime),
para poderlo subir a YouTube y que mantuviese la calidad
suficiente. Esto es algo que investigué mucho al principio, y probé
múltiples formatos y conversiones. Empecé con un *script* que usaba
[ffmpeg](http://ffmpeg.org/), y más tarde me pasé a
[HandBrake](http://handbrake.fr/), pero el formato resultado era
QuickTime siempre.

Pero recientmente, por error, subí un vídeo en formato OGV y entonces
me dí cuenta de que en este tiempo YouTube había expandido los
formatos aceptados, porque el vídeo se veía perfectamente. Esto mejoró
sustancialmente la calidad de los vídeos, porque antes la conversión
desde OGV a QuickTime tenía muchos defectos, típicamente la falta
de sincronización entre audio y vídeo. Recuerdo que esto pasaba mucho
si me ponía a hablar sin hacer nada porque entonces el vídeo tenía un
fotograma casi fijo y luego en el resultado el audio iba bien pero el
vídeo se aceleraba y paraba de forma muy brusca. De hecho llegué a grabar
los vídeos moviendo el ratón permanentemente mientras hablaba para
evitar esto.

