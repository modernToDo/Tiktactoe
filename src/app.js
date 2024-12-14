

let b1 = document.querySelector('.box1').innerHTML;
let b2 = document.querySelector('.box2').innerHTML;
let b3 = document.querySelector('.box3').innerHTML;
let b4 = document.querySelector('.box4').innerHTML;
let b5 = document.querySelector('.box5').innerHTML;
let b6 = document.querySelector('.box6').innerHTML;
let b7 = document.querySelector('.box7').innerHTML;
let b8 = document.querySelector('.box8').innerHTML;
let b9 = document.querySelector('.box9').innerHTML;



let btn1 = document.querySelector('.box1');
let btn2 = document.querySelector('.box2');
let btn3 = document.querySelector('.box3');
let btn4 = document.querySelector('.box4');
let btn5 = document.querySelector('.box5');
let btn6 = document.querySelector('.box6');
let btn7 = document.querySelector('.box7');
let btn8 = document.querySelector('.box8');
let btn9 = document.querySelector('.box9');


function myfunc(){
    if(b1 == 'x' && b2 == 'x' && b3 == 'x'){
        alert('Player X Won!');
    }
    else if(b4 == 'x' && b5 == 'x' && b6 == 'x'){
        alert('Player X Won!');
    }
    else if(b7 == 'x' && b8 == 'x' && b9 == 'x'){
        alert('Player X Won!');
    }
    else if(b1 == 'x' && b4 == 'x' && b7 == 'x'){
        alert('Player X Won!');
    }
    else if(b2 == 'x' && b5 == 'x' && b8 == 'x'){
        alert('Player X Won!');
    }
    else if(b3 == 'x' && b6 == 'x' && b9 == 'x'){
        alert('Player X Won!');
    }
    else if(b1 == 'x' && b5 == 'x' && b9 == 'x'){
        alert('Player X Won!');
    }
    else if(b3 == 'x' && b5 == 'x' && b7 == 'x'){
        alert('Player X Won!');
    }
    
}

let flag = 1;
function func1(){
    if(flag == 1){
        btn1.style.backgroundColor = 'blueviolet';
        const Xtxt =  document.querySelector('.box1').innerHTML; 
        document.querySelector('.box1').innerHTML = 'x';
        // document.querySelector('.box1').style.fontSize = "50px";
      
        flag = 0;
    }
    else{
        b1 = '0';
        btn1.style.backgroundColor = 'purple';
        flag = 1
    }
}
btn1.addEventListener('click', function(){
    console.log('btn1 clicked');
     func1();})












