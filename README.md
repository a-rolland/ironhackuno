# IronhackUno
​
## Descripción

El objectivo del juego es ser el primero en deshacerse de todas sus cartas.
​
## Reglas del juego  

Para poder jugar, hay que tener o el mismo color o el mismo numero que la carta en el medio, o un comodin.

Comodines : 
    +2 : el jugador siguiente tiene que robar 2 cartas.
    +4 : el jugador siguiente tiene que robar 4 cartas. El jugador que pone esta carta tambien elige el nuveo color actual.
    Skip : el jugador siguiente no puede jugar.
    Reverse : se inverte el sentido en cual jugamos ( solo si hay mas de 2 jugadores ).
    Wild : el jugador elige el color actual.
    Wild +4 : el jugador elige el color actual. Ademas, el jugador siguiente tiene que robar 4 cartas. 
    (OJO! A un nivel mas avanzado de desarrollo del juego, solo se puede poner esta carta Wild +4 si el jugador no tiene el color o el numero requerido para poder jugar. Si tiene el color o numero, es decision suya de jugar esta carta, pero el jugador siguiente puede apostar que miente. Si es cierto, el jugador tendra que robar 6 cartas !)

Valor :
Cada carta tiene un valor :
Las cartas de numeros tienen como valor su propio numero.
Los comodines tienen valores mas elevados :
    - Reverse : 20
    - Skip : 20
    - +2 : 20
    - Wild : 50
    - Wild +4: 50

El juego se acaba cuando uno de los jugadores ya no tiene cartas : ha ganado.
O : si la cuenta atras se acabo. Entonces gana el que menos puntos tiene ( cartas de valor mas baja ).
​
## MVP - User stories

### User stories

/!\ Cuando se acabe una, se hace un commit /!\

1. Quiero poder iniciar el juego
2. Quiero poder ver el deck
3. Quiero poder recibir + ver mis cartas
4. Quiero poder ver una primera carta en el centro de la mesa
5. Quiero poder poner una carta (jugar)
6. Quiero que el jugador 2 juegue despues de mi, aleatoriamente
7. Quiero que las cartas se vean bonito
8. Quiero poder distinguir las cartas que se pueden jugar
9. Quiero poder ganar por puntos si la cuenta atras se acaba
10. Quiero animaciones
11. Quiero sonidos dinamicos
12. Quiero poder decir "UNO"
13. Quiero jugar con mas jugadores
14. Quiero poder apostar

### MVP

Las reglas se tienen que implementar poco a poco, iteracion por iteracion.
El canvas y animaciones tambien

#### Iteracion 1 :

- El jugador 1 tiene unas 7 cartas robadas aleatoriamente, y el jugador 2 (ordenador) tambien.
- El jugador gana cuando se ha deshecho de todas sus cartas.
- Un jugador puede jugar mientras tiene el mismo color o el mismo numero.
- Los comodines se juegan como cartas normales de momento.

#### Iteracion 2 : 

- Se pone en marcha el temporizador. Cuando se acabe, si les quedan cartas a los jugadores, ganara el que menos puntos tiene.
(cartas con valor mas baja)

#### Iteracion 3 : 

- Se activan los comodines, por orden de prioridad :
    - +2
    - Skip
    - Wild
    - Wild +4
    - Reverse

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

= Vision de lo que se puede hacer en los proximos sprints.
- Ordenado por prioridad.

## Links

codePen : https://codepen.io/antoine-rolland/pen/WNQjVgV (no utilizado)

### Git

Reposit : https://github.com/a-rolland/ironhackuno

// Deploy: 

### Slides

### Kanban

https://trello.com/b/btdeycdF/one

