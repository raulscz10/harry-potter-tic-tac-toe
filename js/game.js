

//Función para construir el HTML de la vista
const getGameHTML = (game) => {
    return `
            <div class="game-content-container">
                <div class="section-game-players-container">
                    <div class="game-player-container">
                        <div id="border-img-p1" class="game-player-image">
                            <img id="img-p2" class="img-player" src="${game.player1.image}" alt="Imagen Jugador 1">
                        </div>
                        <div class="game-player-data">
                            <div class="name-player">
                                <p>${game.player1.name}</p>
                            </div>
                            <div class="play-number">
                                <p>Fichas: ${game.player1.fichas}</p>
                            </div>
                        </div>
                    </div>
                    <div id="second-player" class="game-player-container">
                        <div id="border-img-p2" class="game-player-image">
                            <img id="img-p2" class="img-player" src="${game.player2.image}" alt="Imagen Jugador 2">
                        </div>
                        <div class="game-player-data">
                            <div class="name-player">
                                <p>${game.player2.name}</p>
                            </div>
                            <div class="play-number">
                                <p>Fichas: ${game.player2.fichas}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tablero-container">
                    <div class="tablero">
                        <div class="fila-tablero">
                            <div id="0" class="columna-tablero">

                            </div>
                            <div id="1" class="columna-tablero">

                            </div>
                            <div id="2" class="columna-tablero">

                            </div>
                        </div>
                        <div class="fila-tablero">
                            <div id="3" class="columna-tablero">

                            </div>
                            <div id="4" class="columna-tablero">

                            </div>
                            <div id="5" class="columna-tablero">

                            </div>
                        </div>
                        <div class="fila-tablero">
                            <div id="6" class="columna-tablero">

                            </div>
                            <div id="7" class="columna-tablero">

                            </div>
                            <div id="8" class="columna-tablero">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;
}

//Función que pinta la estructura HTML de la vista Game
const renderGame = () => {
    root.classList.add("height-vh");
    root.innerHTML = getGameHTML(game);
};

//

const flowGame = () => {
    const htmlCasillas = document.querySelectorAll(".columna-tablero");
    const arrayWinner = [];
    let turno = true;

    const clickCasilla = (element) =>{
        if(element.innerHTML = " "){
            if(turno){
                element.innerHTML = `<img src="img/ficha-rayo-hp.png" alt="Imagen Ficha Tablero" class="img-ficha">`;
                arrayWinner[element.id] = "X";
                document.getElementById("border-img-p1").classList.add("active-play");
                document.getElementById("border-img-p2").classList.remove("active-play");
            }else{
                element.innerHTML = `<img src="img/ficha-mago-tenebroso.png" alt="Imagen Ficha Tablero" class="img-ficha">`;
                arrayWinner[element.id] = "O";
                document.getElementById("border-img-p1").classList.remove("active-play");
                document.getElementById("border-img-p2").classList.add("active-play");
            }
            turno = !turno;
            comprobarTirada(arrayWinner[element.id],arrayWinner)
        }
    }

    for(const box of htmlCasillas) {
        box.addEventListener("click", (event) => {
            const elementCasilla = event.target;
            clickCasilla(elementCasilla);
        });
    }
}

const comprobarTirada = (jugada, arrayWinner) => {

    const comprobarGanador = () => {
        if(jugada == "X"){
            game.winner = game.player1.name;
            renderWinner();
            setWinnerUiEventos();
        }else if (jugada == "O"){
            game.winner = game.player2.name;
            renderWinner();
            setWinnerUiEventos();
        }
    }

    if(arrayWinner[0] == jugada && arrayWinner[1] == jugada && arrayWinner[2] == jugada){
        comprobarGanador();
    }else if(arrayWinner[3] == jugada && arrayWinner[4] == jugada && arrayWinner[5] == jugada){
        comprobarGanador();
    }else if(arrayWinner[6] == jugada && arrayWinner[7] == jugada && arrayWinner[8] == jugada){
        comprobarGanador();
     }else if(arrayWinner[0] == jugada && arrayWinner[3] == jugada && arrayWinner[6] == jugada){
        comprobarGanador();
     }else if(arrayWinner[1] == jugada && arrayWinner[4] == jugada && arrayWinner[7] == jugada){
        comprobarGanador();
    }else if(arrayWinner[2] == jugada && arrayWinner[5] == jugada && arrayWinner[8] == jugada){
        comprobarGanador();
    }else if(arrayWinner[0] == jugada && arrayWinner[4] == jugada && arrayWinner[8] == jugada ){
        comprobarGanador();
    }else if(arrayWinner[2] == jugada && arrayWinner[4] == jugada && arrayWinner[6] == jugada){
        comprobarGanador();
    } else if(arrayWinner[0] != undefined &&
        arrayWinner[1] != undefined &&
        arrayWinner[2] != undefined &&
        arrayWinner[3] != undefined &&
        arrayWinner[4] != undefined &&
        arrayWinner[5] != undefined &&
        arrayWinner[6] != undefined &&
        arrayWinner[7] != undefined &&
        arrayWinner[8] != undefined){
        renderEmpate();
        setEmpateUiEventos();
    }
}
