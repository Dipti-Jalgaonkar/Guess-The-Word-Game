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
const letterConainer = document.getElementById('letter-container');
const userInpSection = document.getElementById('user-input-section');
const resultText = document.getElementById("result");
const word = document.getElementById("word");
const words = Object.keys(options);
let randomWord = "";
randomHint = ""
let winCount = 0
let lossCount = 0;


//Generate random value
const generateRandomValue = (array) => Math.floor(Math.random()* array.length);

//Block all the buttons
const blocker = () => {
    let lettersButton = document.querySelectorAll(".letter");
}

//Start game
startBtn.addEventListener("click", ()=> {
    
})
