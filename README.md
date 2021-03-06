# HackUno

![HackUno Logo](/images/logo_colored.png)
​
## Descripción

El objectivo del juego es ser el primero en deshacerse de todas sus cartas.
Si nadie logra hacerlo, el ganador es el que menos punto tiene.
​
## Reglas del juego  

Para poder jugar, hay que tener o el mismo color o el mismo numero que la carta en el medio, o un comodin.

Comodines : 
    +2 : el jugador siguiente tiene que robar 2 cartas.
    +4 : el jugador siguiente tiene que robar 4 cartas. El jugador que pone esta carta tambien elige el nuveo color actual.
    Skip : el jugador siguiente no puede jugar.
    Reverse : se inverte el sentido en cual jugamos (solo si hay mas de 2 jugadores). Con 2 jugadores, esta carta tiene el mismo efecto que "Skip".
    Wild : el jugador elige el color actual.
    Wild +4 : el jugador elige el color actual. Ademas, el jugador siguiente tiene que robar 4 cartas. 
    (OJO! A un nivel mas avanzado de desarrollo del juego, solo se puede poner esta carta Wild +4 si el jugador no tiene el color o el numero requerido para poder jugar. Si tiene el color o numero, es decision suya de jugar esta carta, pero el jugador siguiente puede apostar que miente. Si es cierto, el jugador tendra que robar 6 cartas !).

Valor :
Cada carta tiene un valor :
Las cartas de numeros tienen como valor su propio numero.
Los comodines tienen valores mas elevados :
- Reverse : 20
- Skip : 20
- +2 : 20
- Wild : 50
- Wild +4 : 50

El juego se acaba cuando uno de los jugadores ya no tiene cartas : ha ganado.
O : si la cuenta atras se acabo. Entonces gana el que menos puntos tiene ( cartas de valor mas baja ).
​
## MVP - User stories

### User stories

1. Quiero poder iniciar el juego
2. Quiero poder ver el deck
3. Quiero poder recibir + ver mis cartas
4. Quiero poder ver una primera carta en el centro de la mesa
5. Quiero poder poner una carta (jugar)
6. Quiero que el jugador 2 juegue despues de mi, aleatoriamente
7. El jugador 2 no podra jugar hasta que yo haya jugado. Los clics en el tablero no activaran nada a no ser que robe desde el deck, o que ponga una carta
8. Quiero poder ganar por puntos si la cuenta atras se acaba
9. Quiero ver la cuenta atras
10. Quiero poder usar los comodines "Skip" & "Reverse"
11. Quiero poder usar los comodines "+2"
12. Quiero poder usar los comodines "Pickcolor"
13. Quiero poder usar los comodines "+4"
14. Quiero que las cartas sean bonitos (diseño)
15. Quiero una musica mientras juegue, una de victoria, y tambien una si pierdo.

### MVP

Las reglas se tienen que implementar poco a poco, iteracion por iteracion.

El canvas y animaciones tambien.

#### Iteracion 1 :

- El jugador 1 tiene unas 7 cartas robadas aleatoriamente, y el jugador 2 (ordenador) tambien.
- El jugador gana cuando se ha deshecho de todas sus cartas.
- Un jugador puede jugar mientras tiene el mismo color o el mismo numero.
- Los comodines se juegan como cartas normales de momento.

#### Iteracion 2 : 

- Se pone en marcha el temporizador. Cuando se acabe, si les quedan cartas a los jugadores, ganara el que menos puntos tiene (cartas con valor mas baja).

#### Iteracion 3 : 

- Se activan los comodines, por orden de prioridad :
    - Skip
    - Reverse
    - +2
    - Wild
    - Wild +4

#### Iteracion 4 : 

- Anadir animaciones/sonidos

#### Iteracion 5 : 

- El jugador puede decir "UNO !" cuando pone la penultima carta.
- Tambien puede sancionar el otro jugador si no lo ha dicho. En este caso el otro jugador tendra que robar 2 cartas.

#### Iteracion 6 : 

- Jugar con mas jugadores

#### Bonus :

- El jugador puede tomar riesgos y apostar : solo se puede poner la carta Wild +4 si el jugador no tiene el color o el numero requerido para poder jugar. Si tiene el color o numero, es decision suya de jugar esta carta, pero el jugador siguiente puede apostar que miente. Si es cierto, el jugador tendra que robar 6 cartas !
​
## Backlog

Quedan para hacer : 
- Sonidos al jugar o robar una carta
- Animaciones con framerate
- Poder jugar el comodin "+4" si y solo si el jugador no tiene otras opciones
- Poner un tiempo limitado para que el jugador juegue. Si se pasa, automaticamente se hace una acción automatica aleatoria en su lugar
- Poder distinguir cartas que se pueden jugar en cada turno
- Poder apostar si el otro jugadores tenia otras opciones al poner una carta "+4", si tenia, entonces tendra que robar 6 cartas. En este caso se cambiaria la otra regla detallada mas arriba
- Poder jugar con mas jugadores

## Links

### GitHub

Reposit : https://github.com/a-rolland/ironhackuno

GitHub Pages : https://a-rolland.github.io/ironhackuno/

### Slides

### Kanban

https://trello.com/b/btdeycdF/one

