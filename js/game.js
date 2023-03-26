

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
    const mapCasillas = [];
    let turno = true;

    const clickCasilla = (element) =>{
        if(element.innerHTML = " "){
            if(turno){
                element.innerHTML = `<img src="../img/ficha-rayo-hp.png" alt="Imagen Ficha Tablero" class="img-ficha">`;
                mapCasillas[element.id] = "X";
                document.getElementById("border-img-p1").classList.add("active-play");
                document.getElementById("border-img-p2").classList.remove("active-play");
            }else{
                element.innerHTML = `<img src="../img/ficha-mago-tenebroso.png" alt="Imagen Ficha Tablero" class="img-ficha">`;
                mapCasillas[element.id] = "O";
                document.getElementById("border-img-p1").classList.remove("active-play");
                document.getElementById("border-img-p2").classList.add("active-play");
            }
            turno = !turno;
            console.log(mapCasillas[element.id]);
            console.log(mapCasillas);
            comprobarTirada(mapCasillas[element.id],mapCasillas)
        }
    }

    for(const box of htmlCasillas) {
        box.addEventListener("click", (event) => {
            const elementCasilla = event.target;
            clickCasilla(elementCasilla);
        });
    }
}

const comprobarTirada = (jugada, mapCasilla) => {

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

    if(mapCasilla[0] == jugada && mapCasilla[1] == jugada && mapCasilla[2] == jugada){
        comprobarGanador();
    }else if(mapCasilla[3] == jugada && mapCasilla[4] == jugada && mapCasilla[5] == jugada){
        comprobarGanador();
    }else if(mapCasilla[6] == jugada && mapCasilla[7] == jugada && mapCasilla[8] == jugada){
        comprobarGanador();
     }else if(mapCasilla[0] == jugada && mapCasilla[3] == jugada && mapCasilla[6] == jugada){
        comprobarGanador();
     }else if(mapCasilla[1] == jugada && mapCasilla[4] == jugada && mapCasilla[7] == jugada){
        comprobarGanador();
    }else if(mapCasilla[2] == jugada && mapCasilla[5] == jugada && mapCasilla[8] == jugada){
        comprobarGanador();
    }else if(mapCasilla[0] == jugada && mapCasilla[4] == jugada && mapCasilla[8] == jugada ){
        comprobarGanador();
    }else if(mapCasilla[2] == jugada && mapCasilla[4] == jugada && mapCasilla[6] == jugada){
        comprobarGanador();
    } else if(mapCasilla[0] != undefined &&
        mapCasilla[1] != undefined &&
        mapCasilla[2] != undefined &&
        mapCasilla[3] != undefined &&
        mapCasilla[4] != undefined &&
        mapCasilla[5] != undefined &&
        mapCasilla[6] != undefined &&
        mapCasilla[7] != undefined &&
        mapCasilla[8] != undefined){
        renderEmpate();
        setEmpateUiEventos();
    }
}
