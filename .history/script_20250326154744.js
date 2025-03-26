const options = {
    aroma: "Pleasing smell",
    pepper: "Salt's partner",
    halt: "put a stop to",
    jump: "Rise suddenly ",
    shuffle: "Mix cards up ",
    combine: "Add, Mix",
    chaos: "Total disorder",
    labyrinth: "Maze",
    disturb: "Interrupt; upset ",
    shift: "Move, Period of word",
    machine: "Device or appliance",
};

//Initial References
const message = document.getElementById("message");
const hintRef = document.querySelector(".hint-ref");
const controls = document.querySelector('.controls-container');
const startBtn = document.getElementById("start");
const letterContainer = document.getElementById('letter-container');
const userInpSection = document.getElementById('user-input-section');
const resultText = document.getElementById("result");
const word = document.getElementById("word");
const words = Object.keys(options);  //object.key returns the objects options property names as an array.
let randomWord = "";
let randomHint = "";
let winCount = 0;
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
    randomHint = options[randomWord];
    hintRef.innerHTML = `<div id="wordHint">
    <span>Hint: </span>${randomHint}</div>`
    let displayItem = "";
    randomWord.split("").forEach((value)=>{
        displayItem += '<span class="inputSpace">_ </span>';
    });

    //display each element as a span
    userInpSection.innerHTML = displayItem;
    userInpSection.innerHTML += `<div id='chanceCount'>Chances Left: ${lossCount} </div>`
};

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
            message.innerText = 'Correct Letter';
            message.style.color = '#008000';
            let charArray = randomWord.toUpperCase().split("");
            let inputSpace = document.getElementsByClassName("inputSpace");


            //if array contains clicked value replace the matched Dash of letter
            if(charArray.includes(button.innerText)){
                charArray.forEach((char, inex) => {
                    //if character in array is same as clicked button
                    if(char === button.innerText) {
                        button.classList.add("correct");

                        //replace dash with letteer
                        inputSpace[index].innerText = char;

                        //increment counter
                        winCount +=1;

                        //if winCOunt equal word length
                        if(winCount == charArray.length ) {
                            resultText.innerHTML = "You Won";
                            startBtn.innerText = "Restart";

                            //block all button
                            blocker();
                        }

                    }
                });
            }
            else {

            }

            //disable clicked button
            button.disabled = true;
        })

        //append generated buttons to the letters container
        letterContainer.appendChild(button);
    }
}

window.onload = () => {
    init();
}
