// CANVAS setup
// **** Global Variables: ****

let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");
canvas.style.backgroundColor = "lightgrey";

//Connect the character position of character.js
let charMove;


//DOM elements:


//buttons
let startButton = document.querySelector("#start-btn");
let restartButton = document.querySelector("#restart-btn");


//screens 
let startScreen = document.querySelector("#start-screen");
let restartScreen = document.querySelector("#restart-screen");

//score
let scoreDisplay = document.querySelector(".score span");



//game object

let game;


// ****   Functions : ****

//Starting the game
const startGame = () => {
    game = new Game();
    game.gameLoop();
    
    
}





//Game Over function 
const restartGame = () => {
    /*restartScreen.style.display = "none";
    canvas.style.display ="flex";*/
    game = new Game();
    
    //Need to restart the game
    game.gameLoop();
}




// **** ADD EVENT LISTERNERS
startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);


startButton.addEventListener("click", () => {
    //hide starting screen
    startScreen.style.display = "none";
    
    //show the canvas 
    canvas.style.display = "flex";
    //start the game


    // Class for the game , when clicked it will create 1 element of that class

    game = new Game();
    game.gameLoop();
})


restartButton.addEventListener("click", () => {
    //hide starting screen
    restartScreen.style.display = "none";
    //show the canvas 
    canvas.style.display = "flex";
    
    //start the game
    // Class for the game , when clicked it will create 1 element of that class
    game = new Game();
    game.gameLoop();
})

window.addEventListener("keydown", (event) => {
    console.log("pressing things", event.code);

    
    //check which event is triggered with if statement, if a key that i want is pressed, move the char
    if( event.code === "KeyW") {
        if( game.char.isOnFloor){
            game.char.charJump();
            game.incrementScore();
        }
    }


    if( event.code === "Space") {
        if( game.char.isOnFloor){
            game.char.charJump();
            game.incrementScore();
        }
    }
    if( event.code === "ArrowUp") {
        if( game.char.isOnFloor){
            game.char.charJump();
            game.incrementScore();
        }
    }

    

    if( event.code === "ArrowRight"){
        game.char.charMovementRight();
    }

    if( event.code === "ArrowLeft"){
        game.char.charMovementLeft();
    }

     
    
})





canvas.addEventListener("click", () => {      
    //char jump
    if( game.char.isOnFloor){
        game.char.charJump();
        game.incrementScore();
    }

    //if statement to restrict the jump
    /*if(game.char.y > canvas.height){
        char.y - 1;
    }*/
})


//Event Listener to prevent the screen from scrolling while using space or arrows
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);






