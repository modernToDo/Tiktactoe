const boxes = document.querySelectorAll(".box");
const playercount = document.querySelector(".playercount");
const computercount = document.querySelector(".computercount");
const tiecount = document.querySelector(".tiecount");
const audio = document.querySelector(".audio");
let currentplayer = "x";
let index;
let counter = 0;
let counter0 = 0;
let counterTie = 0;

let tracking = [0, 1, 2, 3, 4, 5, 6, 7, 8];
boxes.forEach((box) =>
  box.addEventListener("click", (e) => {
    index = e.target;
    targetindex = Array.from(boxes).indexOf(index);
    // console.log(targetindex)
    write();
  })
);
function write() {
  if (index.innerHTML == "") {
    index.innerHTML = currentplayer;
    if (currentplayer == "x") {
      index.classList.add("x");
      tracking.splice(tracking.indexOf(targetindex), 1);
      winner();
     
    }
  }
  if (tracking.length != 0) {
    currentplayer = '0';
    PlayWithComputer();
}  
}
  function winner() {
    if (checkwinner()) {
      
      if (currentplayer == "x") {
          setTimeout(() => {
                if (currentplayer == "x") {
                   playercount.innerHTML = ++counter;
                   document.querySelector(".winner").textContent = `player "${currentplayer} won!"`
                 }
                 audio.play();
                 reset();
          }, 500)     
      }
           else {
          setTimeout(() => {
              currentplayer = '0';
              computercount.textContent = ++counter0;
              document.querySelector(".winner").textContent = `player "${currentplayer} won!"`;     
              audio.play();
             }, 500);
             reset();
          }
        
          endGame(false);
          setTimeout(() => {
            audio.pause();
            location.reload();
          }, 3000);
     
        }
     else if (tie()) {
      setTimeout(() => {
        tiecount.textContent = ++counterTie;
        document.querySelector(".winner").textContent = 'It is a Tie';  
          endGame(true);
      }, 0);
      reset();
        location.reload();
    }
  }

  function tie() {
    return Array.from(boxes).every(box => {
        return box.classList.contains("x") || box.classList.contains("circle");
   })
};
function reset() {
  Array.from(boxes).map(box => {
          box.innerHTML = "";
          box.classList.remove("x");
          box.classList.remove("circle");
      });
  currentplayer = "X";
}
function endGame(draw) {
  if (draw) {
      alert("it`s a Tie");
     document.querySelector(".counterTie").innerText = ++counterTie; 
  } 
};

function resetboard() {
  boxes.forEach((box) => (box.innerHTML = ""));
  boxes.forEach((box) => box.classList.remove("x"));
  boxes.forEach((box) => box.classList.remove("circle"));
}
let BoxtoArray = Array.from(boxes);
function checkwinner() {
  let collections = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  return collections.find((item) =>  item.every((num) => BoxtoArray[num].innerHTML === currentplayer));
}


let random;
function PlayWithComputer() {
  console.log(tracking);

  random = Math.floor(Math.random() * tracking.length);
  console.log(random); //pick random number from 0 to 8
  // let ifcontainsX =  Array.from(boxes)[random].classList.contains('x');
  // let  ifcontains0 = Array.from(boxes)[random].classList.contains('circle');
  let trackingbox = tracking[random]
  let randomBox = BoxtoArray[trackingbox];
  if (randomBox.innerHTML == "") {
    randomBox.innerHTML = "0";
    randomBox.classList.add("circle");
    winner();
    tracking.splice(random, 1);
    currentplayer = "x";
  }
}
