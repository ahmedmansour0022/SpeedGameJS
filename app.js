const square = document.querySelectorAll('.square');
const play = document.querySelectorAll('.play');
const timeleft = document.querySelector('#time');
let score = document.querySelector('#record');
let hitposition=0;
let result = 0;
let current = timeleft.textContent;
function randome(){
    square.forEach(x=>{
        x.classList.remove('play');
    });
    let randome = square[Math.floor(Math.random()*9)];
    randome.classList.add('play');
    hitposition = randome.id;
}
square.forEach(x=>{
    x.addEventListener('mouseup',()=>{
        if(x.id==hitposition){
            result++;
            score.textContent=result;
        }
    })
})
function move (){
    let timer = null;
    timer = setInterval(randome,500);
}
move();
function count(){
    current--;
    timeleft.textContent = current;
    if(current === 0){
        clearInterval(time);
        alert('Game Over');
    }
}
let time = setInterval(count,1000);