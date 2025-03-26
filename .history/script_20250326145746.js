const options = {
    aroma: "Pleasing smell",
    pepper: "Salt's partner",
    halt: "put a stop to",
    jump: "Rise suddenly ",
    shuffle: "Mix cards up ",
    combine: "Add; Mix",
    chaos: "Total disorder",
    labyrinth: "Maze",
    disturb: "Interrupt; upset ",
    shift: "Move; Period of word",
    machine: "Device or appliance",
};

//Initial References
const message = document.getElementById("message");
const hintRef = document.querySelector('.hint-ref');
const controls = document.querySelector('.controls-container');
const startBtn = document.getElementById("start");
const letterContainer = document.getElementById('letter-container');
const userInpSection = document.getElementById('user-input-section');
const resultText = document.getElementById("result");
const word = document.getElementById("word");
const words = Object.keys(options);  //object.key returns the objects options property names as an array.
let randomWord = "";
let randomHint = ""
let winCount = 0
let lossCount = 0;


//Generate random value
const generateRandomValue = (array) => Math.floor(Math.random()* array.length);

//Block all the buttons
const blocker = () => {
    let lettersButton = document.querySelectorAll(".letters");

    stopGame();
}

//Start game
startBtn.addEventListener("click", ()=> {
    controls.classList.add("hide");
    init();
});

//stop game
const stopGame = () => {
    controls.classList.remove("hide");
}

//generate Word
const generateWord = () => {
    letterContainer.classList.remove("hide");
    userInpSection.innerText = "";
    randomWord = words[generateRandomValue(words)];
    console.log(randomWord);
}

//Initial Function
const init = () => {
    winCount =0;
    lossCount = 5;
    randomWord = "";
    word.innerText = "";
    randomHint = "";
    message.innerText = "";
    userInpSection.innerHTML = "";
    letterContainer.classList.add("hide");
    letterContainer.innerHTML = "";
    generateWord();


    //for creating letter buttons
    for(let i =65; i<91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");

        //Numbet to ASCII(a-z)
        button.innerText = String.fromCharCode(i);

        //character button onclick
        button.addEventListener("click", () => {

        })

        //append generated buttons to the letters container
        letterContainer.appendChild(button);
    }
}
