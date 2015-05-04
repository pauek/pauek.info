---
layout: post
title: La C++ Champions League (parte 1)
---

{{ page.title }}
================

<time class="fecha">Abril de 2015 - Sant Cugat</time>

La [gamificación](http://es.wikipedia.org/wiki/Ludificaci%C3%B3n) está
de moda: todo el mundo está
[interesado en ella](https://www.coursera.org/course/gamification),
todo el mundo [habla de ella](https://youtu.be/MuDLw1zIc94), todo el
mundo [*bloguea*](http://www.marinva.es/marinvitzat) sobre ella... y algunos estamos un poco locos y
también la implementamos en clase. Así que si lo estás pensando,
quizás te venga bien leer sobre mi experiencia, a ver si consigues
evitarte algunas de las magulladuras, rascadas y quizás hasta
cicatrices que tendré por haberme tirado a la piscina. (Vale, en
realidad había agua pero estaba bien fresquita.)

La C++ Champions League
-----------------------

Mi asignatura va sobre [programación](http://www.minidosis.org), y al
haber mayoría de chicos decidí que para maximizar mis posibilidades de
éxito había que hacer una "liga de fútbol". Me sabe mal por las chicas
y otros alumnos (como yo mismo cuando era estudiante!), indiferentes a
pantallas verdes y hombrecitos pasándose una pelota. Pero con estas
cosas hay que ir a lo seguro, y acordándome de esas clases tardías de
miércoles con el aula vacía "porque había Champions", el tema me
pareció inevitable.

Así pues, cada clase es una jornada de liga, con equipos de 6
estudiantes. Tengo unos 50 alumnos, o sea unos 8 equipos, de los
cuales en realidad vienen 7. Uno de los objetivos de la liga a
principio de curso era arreglar la asistencia a las clases, que estaba
por los suelos. (La razón de esto la explico otro día.) Y la verdad,
con alrededor de 40 estudiantes por sesión, no puedo estar
más contento. Las jornadas de competición son muy intensas, con
intercambio de conocimientos entre estudiantes hasta en el descanso.

Eso es porque la competición es como una especie de tanda de penaltis,
o almenos se escenifica así, directo a la vena. Cada estudiante
"chuta" un problema, que quiere decir que escoje qué problema va a
hacer un estudiante de otro equipo. La lista de problemas tiene
alrededor de 10 problemas y es "oficial", solo se pueden poner
problemas sacados de esa lista. Esto tiene un efecto interesante
porque los problemas de esa lista adquieren un áurea dorada que hace
que los alumnos estén mucho más motivados por saber resolverlos.

Las urnas
---------

La logística de la clase me produjo estrés durante varias sesiones,
porque para que todo funcione bien cada alumno debe rellenar una
papeleta con el problema que va a chutar y depositarla en la urna del
equipo al que quiere "atacar". Es un papelito cuadrado donde hay que
poner DNI y equipo del chutador, problema elegido, y
tiene esta pinta:

![La papeleta del penalti](/img/papeleta.png)

A que está chula? En estas cositas gasté algo de tiempo porque me
pareció que para hacerlo creíble, el juego tenía que hacerse con
material que fuese sugerente. (Bueno, quizás es que también soy un
maldito perfeccionista.) Además, la logística para los estudiantes
también es compleja, y si no está todo muy masticado y preparado puede
haber confusión.

Total, que para "hacer los lanzamientos de penalti", hay que ordenar a
los estudiantes para depositar sus papeletas. El orden es aleatorio y
distinto en cada sesión. Eso lo hago en mi ordenador, a partir de la
lista de DNIs. Luego copio la ordenación en 5 transparencias de una
presentación de Google Docs, y la proyecto durante la clase. Hasta ahí
todo bien.

Pero lo segundo, y más importante, es asegurar que cada alumno, aparte
de chutar, también reciba exactamente un problema para
resolver. Siguiendo con el vocabulario futbolístico, cuando resuelves un
problema tienes el rol de "portero". Así que lo que en realidad hay
que asegurar es que cada equipo reciba exactamente tantas papeletas
como miembros del equipo hay ese día. Cuando llega la hora de
lanzamiento de penaltis, se forma una cola de alumnos nerviosos por
poner sus papeletas en las urnas, y debes tener forma de saber si las
urnas estan realmente completas o no. De lo contrario habría un cierto
caos al repartir los problemas que le han tocado a cada equipo y la
cosa acabaría en distracción, pérdida de tiempo y credibilidad, etc.
Se ve ahora lo del estrés?


Impresión 3D al rescate
-----------------------

Así que viendo la situación y la posibildad de que los lanzamientos de
penalti se sumiesen en la entropía, me monté un sistema para facilitar
al máximo esa parte. Diseñé unas cajitas con 6 casillas (una por
jugador) e imprimí 8, de color negro, y a cada una le puse la etiqueta
de un equipo. El diseño lo hice en FreeCAD gracias al
[curso de Obijuan](https://youtu.be/2_DbFzFV9D4?list=PLmnz0JqIMEzWQV-3ce9tVB_LFH9a91YHf):

![Diseño urna](/img/disenyo_urna.png)

Luego hice también unas cruces que permiten tapar una casilla para
cuando en un equipo falta algun jugador. Esto se ve en la foto
siguiente

![Las urnas](/img/urnas.jpg)

En la foto se ve otra cosa divertida y es que al principio de la liga,
cuando se formaron los equipos, pedí a cada equipo que me hiciese un
logo en color y los imprimí para poder colocar las urnas detrás de
cada logo durante los lanzamientos. Un cierta sensación de
personalización es importante en estas cosas, así el juego se toma
como algo propio.

Y la cosa funcionó muy bien, porque de las papeletas hacen una bolita
o las doblan (los hay que incluso hacen pajaritas o aviones) y las
ponen en las casillas vacías y se ve enseguida qué equipos tienen
todas sus casillas llenas y cuáles no, con lo cual, el lanzamiento de
penaltis se hace en 5 minutos como mucho.

Esquema de la sesión
--------------------

En realidad, el lanzamiento de penaltis se hace a mitad de la clase, y
para entonces el ambiente está bastante tenso. A mis colegas les digo
que he tenido la desfachatez de poner a los alumnos un control semanal
y que ni se han dado cuenta. Pero los nervios son casi los mismos. La
analogía con el exámen es mayor, si cabe, porque es al principio de la
clase cuando reparto una copia de la lista de problemas por equipo. Al
tener acceso a los problemas que van a poder chutar (y quizás parar),
el interés es mayúsculo. De hecho creo que nunca había visto tanta
puntualidad. Les pedí a principio de curso que juntaran las mesas y
cuando llego a las 15:00, estan ya casi todos los grupos
sentados preparando la competición.

Lo primero que hago, entonces, es repartir las listas de problemas y
las papeletas de los penaltis (son pequeñas, caben 12 por hoja). En
las últimas jornadas, donde ya he depurado algunos errores, he
repartido una lista de 6 problemas (con enunciados cortos, que ocupan
una cara de una página a dos columnas). Esto les da una hora (las
clases duran dos horas) para preparar los problemas en grupo. Por muy
capaz que sea un jugador en concreto, no podrá hacer los 6, o sea que
por fuerza se los tienen que repartir. Cada equipo hace sus
estrategias y reparte como puede, pero pasada la hora de preparación,
coloco las urnas en una mesa encima de la tarima del profesor y se
hacen los lanzamientos.

Parado, desviado o gol
----------------------

Cuando las urnas estan llenas, las distribuyo a cada equipo y aquí
viene una parte interesante. En realidad, pese a que el chutador puede
escoger a qué equipo va a chutar, no puede decidir qué jugador en
particular será el portero, porque son los equipos que reparten los
penaltis como mejor les parezca. Esto permite optimizar a un equipo
sus habilidades y parar los penaltis de la mejor manera posible. Suele
haber especialización, con los estudiantes más buenos mirando los
temas nuevos y los demás en temas anteriores.

Para resolver los penaltis también reparto hojas con la cabecera
siguiente:

![Hoja problema](/img/hoja_problema.png)

El portero debe copiar el contenido de la papeleta en la esquina de
arriba a la derecha y luego entrar sus datos en la parte
central. Luego puede empezar a resolver el problema. Esta parte se
hace en "modo control", porque así se puede saber que lo que ha hecho
un jugador realmente es obra suya y solo suya. Esto implica no-apuntes
y silencio durante la resolución de los problemas. Para resolverlos
tienen unos 30 minutos, pasados los cuales me entregan las hojas y yo las
clasifico allí mismo por equipos (mirando la zona del chutador).

Esto es importante porque la gracia del binomio chutador-portero es
que el chutador pone el problema pero luego debe corregirlo. Así que
los DNIs y equipos son indispensables porque las hojas deben volver a
quien puso el problema y entonces al chutador se le dan 20 minutos
para hacer la corrección. Esencialmente, el chutador debe evaluar el
problema resuelto por el portero como "parado" (bien hecho),
"desviado" (a medias), o "gol" (mal hecho). Según sea la evaluación,
el chutador puede proseguir resolviendo él el problema, corrigiendo
las partes mal hechas, o si no sabe hacer el problema dejando esta
parte en blanco. Para no confundir lo que ha escrito cada alumno, los
chutadores (correctores) deben escribir en boli rojo. Una vez
corregido todo, me entregan los penaltis y luego yo los reviso (esta
es la parte de las cicatrices que comentaba antes).

*Seguirá...*

