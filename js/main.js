const root = document.getElementById("root");

const game = {
  player1: {
    name: null,
    image: null,
    fichas: 3,
  },
  player2:{
    name: null,
    image: null,
    fichas: 3,
  },
  winner: null,
}

//Funciones que pintan
const getWelcomeHTML = () => {
    return `
          <div class="content-container">
            <div class="center-container">
                <div class="title-container">
                    <h1 class="title">TIC TAC TOE <span class="center">Harry Potter</span></h1>
                </div>
                <div class="conf-party-container">
                    <button id="btn-play" name="btn-play" class="btn-play">JUGAR PARTIDA</button>
                </div>
            </div>
            <div class="right-container">
                <div class="how-to-play-container">
                    <div class="houses-flags">
                        <img class="img-houses-flags" src="./img/houses.png" alt="Imagen De Las Banderas De Las Casas">
                    </div>
                    <div class="how-to-play-desc">
                        <div class="how-to-play-title">
                            ¿Cómo se juega?
                        </div>
                        <div class="how-to-play-description">
                            <p>Cada jugadorar eligira unos de los dos modos de juego que hay. Cada jugador tendrá un movimiento por turno y tendrá como objetivo realizar una línea ya sea vertical, horizontal o diagonal de sus 3 fichas.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="left-container">
                <div class="game-modes-container">
                    <div class="game-modes-title">
                        <h1 class="title-text-gm">Modos De Juego</h1>
                    </div>
                    <div class="game-modes-desc">
                        <div class="desc-title">
                            Jugador vs Jugador
                        </div>
                        <div class="description">
                            <p>El modo Jugador vs Jugador es el modo multijugador. En él tratarás de demostrar que eres más inteligente que tu amigo. El primero que consiga que tres de sus fichas estén en raya gana.</p>
                        </div>
                    </div>
                    <div class="game-modes-desc">
                        <div class="desc-title">
                            Jugador vs Ordenador
                        </div>
                        <div class="description">
                            <p>El modo Player vs CPU es el modo contra la máquina. En él tratarás de ser más astuto que el PC y conseguir que tus fichas estén en raya, el primero que lo consiga gana.</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div id="myModal-Crear-Partida" class="modal">
              <div class="modal-content">
                  <span class="close">&times;</span>
                  <div class="conf-game-container">
                      <div class="title-conf-game">
                          <h1 id="padding" class="h1-conf-game">Ajustes Partida</h1>
                      </div>
                      <div class="card-conf-game">
                          <div class="first-container">
                              <div class="p-choose-game">
                                  <p id="padding">Escoge tu modo de juego:</p>
                              </div>
                              <div class="container-img">
                                  <div class="two-column">
                                      <img id="game_mode_players" src="./img/player_vs_player_icon.png" class="choose-game-img" alt="Player 1 VS Player 2">
                                  </div>
                                  <div class="two-column">
                                      <img id="game_mode_cpu" src="./img/cpu.png" class="choose-game-img" alt="Player 1 VS Player 2">
                                  </div>
                              </div>
                          </div>
                          <div class="container-name-players">
                              <div class="player-container">
                                  <div class="player-name">
                                      <p>Player 1 Configura Tu Perfil</p>
                                  </div>
                                  <div class="player-icon">
                                      <div class="column-icon">
                                          <div class="fila-icon">
                                              <img id="img_player1" class="icono-player" src="./img/harry-potter-icon.jpeg" alt="Imagen Icono Harry Potter">
                                          </div>
                                          <div class="fila-icon">
                                              <img id="img_player1" class="icono-player" src="./img/ron-wealy-icon.jpg" alt="">
                                          </div>
                                          <div class="fila-icon">
                                              <img id="img_player1" class="icono-player" src="./img/hermione-granger-icon.jpg" alt="">
                                          </div>
                                          <div class="fila-icon">
                                              <img id="img_player1" class="icono-player" src="./img/hermanos-wealy-icon.jpg" alt="">
                                          </div>
                                      </div>
                                      <div class="column-icon">
                                          <div class="fila-icon">
                                              <img id="img_player1" class="icono-player" src="./img/dumbledore-icon.jpg" alt="Imagen Icono Harry Potter">
                                          </div>
                                          <div class="fila-icon">
                                              <img id="img_player1" class="icono-player" src="./img/voldemort-icon.webp" alt="">
                                          </div>
                                          <div class="fila-icon">
                                              <img id="img_player1" class="icono-player" src="./img/bellatriz-lestrange-icon.jpg" alt="">
                                          </div>
                                          <div class="fila-icon">
                                              <img id="img_player1" class="icono-player" src="./img/severus-snape-icon.jpg" alt="">
                                          </div>
                                      </div>
                                      <div class="input-name-player">
                                          <input type="text" id="name-player-1" class="input-name" placeholder="Introduce tu nombre...">
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="container-name-players">
                              <div class="player-container">
                                  <div class="player-name">
                                      <p>Player 2 Configura Tu Perfil</p>
                                  </div>
                                  <div class="player-icon">
                                      <div class="column-icon">
                                          <div fila-icon class="fila-icon">
                                              <img id="img_player2" class="icono-player2" src="./img/harry-potter-icon.jpeg" alt="Imagen Icono Harry Potter">
                                          </div>
                                          <div fila-icon class="fila-icon">
                                              <img id="img_player2" class="icono-player2" src="./img/ron-wealy-icon.jpg" alt="">
                                          </div>
                                          <div fila-icon class="fila-icon">
                                              <img id="img_player2" class="icono-player2" src="./img/hermione-granger-icon.jpg" alt="">
                                          </div>
                                          <div fila-icon class="fila-icon">
                                              <img id="img_player2" class="icono-player2" src="./img/hermanos-wealy-icon.jpg" alt="">
                                          </div>
                                      </div>
                                      <div class="column-icon">
                                          <div fila-icon class="fila-icon">
                                              <img id="img_player2" class="icono-player2" src="./img/dumbledore-icon.jpg" alt="Imagen Icono Harry Potter">
                                          </div>
                                          <div fila-icon class="fila-icon">
                                              <img id="img_player2" class="icono-player2" src="./img/voldemort-icon.webp" alt="">
                                          </div>
                                          <div fila-icon class="fila-icon">
                                              <img id="img_player2" class="icono-player2" src="./img/bellatriz-lestrange-icon.jpg" alt="">
                                          </div>
                                          <div id="fila-icon" class="fila-icon">
                                              <img id="img_player2" class="icono-player2" src="./img/severus-snape-icon.jpg" alt="">
                                          </div>
                                      </div>
                                      <div class="input-name-player">
                                          <input type="text" id="name-player-2" class="input-name" placeholder="Introduce tu nombre...">
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="btn-create-game-container">
                              <button id="btn-create-game" name="btn-create-game" class="btn-create-game">CREAR PARTIDA</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    `;
}

const setWelcomeUiEventos = () => {
  document.getElementById("btn-create-game").addEventListener("click", () =>{
      const name1Input = document.getElementById("name-player-1").value;
      const name2Input = document.getElementById("name-player-2").value;
      //Validar

      //actualizar
      game.player1.name = name1Input;
      game.player2.name = name2Input;

      //renderizar vista game
      renderGame();
      flowGame();
  });
}

//Llamando a las funciones que pintan el HTML
const renderWelcome = () => {
    root.innerHTML = getWelcomeHTML();
}

const insertarImagenes = () => {
    recogerImagenesPlayer1();
    recogerImagenesPlayer2();
}

const modificarImagenesPlayer1 = (imgPlayer1) => {
    const imgP1 = imgPlayer1.srcElement.currentSrc;
    console.log(imgP1);
    game.player1.image = imgP1;
}

const modificarImagenesPlayer2 = (imgPlayer2) => {
    const imgP2 = imgPlayer2.srcElement.currentSrc;

    game.player2.image = imgP2;
}

const recogerImagenesPlayer1 = () => {
    const imgPlayers = document.querySelectorAll(".icono-player");

    for(let i= 0; i < imgPlayers.length; i++){
        imgPlayers[i].addEventListener("click", (event) => {
            const marcarImagen = event.target;
            marcarImagen.classList.remove("icono-player");
            marcarImagen.classList.add("active-img");
        });
    }

    for(const imgs of imgPlayers) {
        imgs.addEventListener("click", modificarImagenesPlayer1);
    }
}

const recogerImagenesPlayer2 = () => {
    const imgPlayers = document.querySelectorAll(".icono-player2");

    for(let i= 0; i < imgPlayers.length; i++){
        imgPlayers[i].addEventListener("click", (event) => {
            const marcarImagen = event.target;
            marcarImagen.classList.remove("icono-player2");
            marcarImagen.classList.add("active-img");
        });
    }

    for(const imgs of imgPlayers) {
        imgs.addEventListener("click", modificarImagenesPlayer2);
    }
}


//LLamando funciones
renderWelcome();
setWelcomeUiEventos();
insertarImagenes();



// Modal Box Crear Partida
var modal = document.getElementById("myModal-Crear-Partida");

var btn = document.getElementById("btn-play");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}