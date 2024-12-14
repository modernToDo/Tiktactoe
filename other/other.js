let currentPlayer = "X";
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");
let counter = 0;
let counter0 = 0;
let counterTie = 0;
let board;
const boxes = document.querySelectorAll(".box");
let tracking = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function write() {
    let targetIndex = Array.from(boxes).indexOf(index);
    if (boxes[targetIndex].innerHTML == "") {
        boxes[targetIndex].innerHTML = currentPlayer;
        if (currentPlayer == "X") {
            boxes[targetIndex].classList.add("x");
            tracking.splice(tracking.indexOf(targetIndex), 1);           
        } 
    };
    //currentPlayer = currentPlayer == "X" ? "O" : "X";
    checkwhowon();
     if (tracking.length != 0) {
                currentPlayer="O"
               playWithComputer();
          }  
}
function checkwhowon() {
    if (winner()) {
        if (currentPlayer == "X") {
            setTimeout(() => {
                if (currentPlayer == "X") {
                    playerScore.innerHTML = ++counter;
                    document.querySelector(".result").textContent = `player "${currentPlayer} won!`
                }
                reset();
            }, 1000)
        }
             else {
            setTimeout(() => {
                currentPlayer = "O";
                computerScore.textContent = ++counter0;
                document.querySelector(".result").textContent = `player "${currentPlayer} won!`;            
            reset();
        }, 1000); 
            }
     
        endGame(false);
    } else if (tie()) {
        setTimeout(() => {
            endGame(true);
            reset();
        }, 0);
        
    }
       
};
let index;
boxes.forEach(ev => {
    ev.addEventListener("click",(e)=>{
        index = e.target;
        write();
    })
    
})

function winner() {
    let checkWinner = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    return checkWinner.some(winner => winner.every(num => boxes[num].innerHTML == currentPlayer));
};

function reset() {
    Array.from(boxes).map(box => {
            box.innerHTML = "";
            box.classList.remove("x");
            box.classList.remove("circle");
        });
    currentPlayer = "X";
}

function tie() {
    return Array.from(boxes).every(box => {
        return box.classList.contains("x") || box.classList.contains("circle");
   })
};
function endGame(draw) {
    if (draw) {
        alert("it`s a Tie");
       document.querySelector(".tieScore").innerText = ++counterTie; 
    } 
};

function playWithComputer() {
    let random = Math.floor(Math.random() * tracking.length);
    let trackingBox=tracking[random]
    let randomBox = Array.from(boxes)[trackingBox];
    if (randomBox.innerHTML == "") {
       randomBox.innerText = currentPlayer;
    randomBox.classList.add("circle");
        tracking.splice(random, 1);
        checkwhowon(); 
        currentPlayer = "X"  
    }
   

}
/*
function computerMove() {
    let track =tracking.map((cell, index) => cell === null ? index : null).filter(index => index !== null);
    let randomIndex = track[Math.floor(Math.random() * tracking.length)];
    boxes[randomIndex].textContent = 'O';
}*/