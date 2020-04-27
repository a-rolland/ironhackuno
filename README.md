# IronhackUno
​
## Descripción

El objectivo del juego es ser el primero en deshacerse de todas sus cartas.
​
## Reglas del juego  

Para poder jugar, hay que tener o el mismo color o el mismo numero que la carta en el medio, o un comodin.

Comodines : 
    +2 : el jugador siguiente tiene que robar 2 cartas.
    +4 : el jugador siguiente tiene que robar 4 cartas. El jugador que la pone esta carta tambien elige el color actual.
    Pickcolor : el jugador elige el color actual.
    Skip : el jugador siguiente no puede jugar.
    Reverse : se inverte el sentido en cual jugamos ( solo si hay mas de 2 jugadores ).

Valor :
Las cartas de numeros tienen como valor su propio numero.
Los comodines tienen valores mas elevados :
    Reverse : 20
    Skip : 20
    +2 : 20
    +4 + Pickcolor: 50
    Pickcolor : 50

El juego se acaba cuando uno de los jugadores ya no tiene cartas : ha ganado.
O : si la cuenta atras se acabo. Entonces gana el que menos puntos tiene ( cartas de valor mas baja ).
​
## MVP - User stories

----- MVP -----

Las reglas se tienen que implementar poco a poco, iteraciones por iteraciones.
El canvas y animaciones tambien

Iteracion 1 :

- El jugador tiene unas cuantas cartas robadas aleatoriamente.
- Jugar solo. Sale una carta del juego, y a ver si podemos jugar o no.
- Temporizador para que se acabe el juego
- El jugador gana cuando se ha deshecho de todas sus cartas. Tiene que tener lo menos puntos posibles
y en el minimo de tiempo.

----- User stories -----

/!\ Cuando se acabe una, se hace un commit /!\

1. Quiero poder iniciar el juego
2. Quiero poder ver mis cartas
3. Quiero poder poner una carta
4. Quiero poder ganar por puntos si la cuenta atras se acaba
5. Quiero jugar con mas jugadores
6. Quiero animaciones
7. Quiero sonidos dinamicos
8. Quiero poder decir "UNO"
9. Quiero poder hacer apuestas
​
## Backlog

= Vision de lo que se puede hacer en los proximos sprints.
- Ordenado por prioridad.

## Links

codePen : https://codepen.io/antoine-rolland/pen/WNQjVgV

## Backlog

### Git

Reposit : https://github.com/a-rolland/ironhackuno

// Deploy: 

### Slides

### Kanban

https://trello.com/b/btdeycdF/one

