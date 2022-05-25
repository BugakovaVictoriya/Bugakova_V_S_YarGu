const btn = document.getElementById('btnGame');
const gameBox = document.getElementById('game');
let choseArr = [];
let choseIdArr = [];
let count = 0;
const gamechipArray = [
    {imageName: "img1", imagePath: "../img/game_card_1.svg"},
    {imageName: "img1", imagePath: "../img/game_card_1.svg"},
    {imageName: "img2", imagePath: "../img/game_card_2.svg"},
    {imageName: "img2", imagePath: "../img/game_card_2.svg"},
    {imageName: "img3", imagePath: "../img/game_card_3.svg"},
    {imageName: "img3", imagePath: "../img/game_card_3.svg"},
    {imageName: "img4", imagePath: "../img/game_card_4.svg"},
    {imageName: "img4", imagePath: "../img/game_card_4.svg"},
    {imageName: "img5", imagePath: "../img/game_card_5.svg"},
    {imageName: "img5", imagePath: "../img/game_card_5.svg"},
    {imageName: "img6", imagePath: "../img/game_card_6.svg"},
    {imageName: "img6", imagePath: "../img/game_card_6.svg"}
]

btn.onclick = playGame;
function playGame() {
    
    gamechipArray.sort(function() { return Math.random() - 0.5 });

    while (gameBox.firstChild) {
        gameBox.removeChild(gameBox.firstChild);
    }
    for(let i=0; i<12; i++){
        const chip = document.createElement('img');
        chip.setAttribute("id", String(i));
        chip.setAttribute("class", "games-pole__chips chips");
        chip.setAttribute("src", '../img/game_card_0.svg');
        chip.addEventListener("click", flipCard);
        gameBox.appendChild(chip);
    }
}

function flipCard(){
    let chipId = this.getAttribute("id");
    choseArr.push(gamechipArray[chipId].imageName);
    choseIdArr.push(chipId);
    this.setAttribute("src", gamechipArray[chipId].imagePath);
    if (choseArr.length === 2){
        check();
    }
}

function check(){
    const chips = document.getElementsByClassName('chips');
    const id1 = choseIdArr[0];
    const id2 = choseIdArr[1];
    
    if (choseArr[0] === choseArr[1] && id1 !== id2) {
        chips[id1].removeEventListener("click", flipCard);
        chips[id2].removeEventListener("click", flipCard);
        count++;
    }
    else {
        (async () => {
        await new Promise((resolve, reject) => setTimeout(resolve, 1500));
        chips[id1].setAttribute("src", '../img/game_card_0.svg');
        chips[id2].setAttribute("src", '../img/game_card_0.svg');
    })();
    }

    choseArr = [];
    choseIdArr = [];
    if(count===6){
        count = 0;
        const win = document.createElement('h2');
        win.textContent = "You Win!";
        win.style.margin = "auto";
        gameBox.appendChild(win);
    }
}