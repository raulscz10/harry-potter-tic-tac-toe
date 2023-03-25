const getWinnerHTML = (game) =>{
    return `
            <div class="content-container-justify">
                <div class="result-container">
                    <div class="info-result">
                        <h1 id="info-result">!${game.winner} HA GANADO!</h1>
                    </div>
                    <div class="gif-container">
                        <img id="img-giff" src="../img/hp-win.gif" class="giff-winner" alt="GIFF GANADOR O PERDEDOR">
                    </div>
                    <div class="btn-inicio-container">
                        <button id="btn-restart" class="btn-inicio">VOLVER INICIO</button>
                    </div>
                </div>
            </div>
    `;
}

const getEmpateHTML = () => {
    return `
            <div class="content-container-justify">
                <div class="result-container">
                    <div class="info-result">
                        <h1 id="info-result">!LA PARTIDA EMPATE!</h1>
                    </div>
                    <div class="gif-container">
                        <img id="img-giff" src="../img/hp-lose.gif" class="giff-winner" alt="GIFF GANADOR O PERDEDOR">
                    </div>
                    <div class="btn-inicio-container">
                        <button id="btn-restart" class="btn-inicio">VOLVER INICIO</button>
                    </div>
                </div>
            </div>
    `;
}

//Función que pinta la estructura HTML de la vista Winner
const renderWinner = () => {
    root.innerHTML = getWinnerHTML(game);
}

renderEmpate = () =>{
    root.innerHTML = getEmpateHTML();
}

const setEmpateUiEventos = () =>{
    document.getElementById("btn-restart").addEventListener("click", () => {
        root.classList.remove("height-vh");
        renderWelcome();
        setWelcomeUiEventos();
    });
}

const setWinnerUiEventos = () => {
    document.getElementById("btn-restart").addEventListener("click", () => {
        root.classList.remove("height-vh");
        renderWelcome();
        setWelcomeUiEventos();
    });
}