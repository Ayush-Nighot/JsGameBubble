var score=0;
var timer=60;
var hitRn=0;  // because we want to use this in both getNewhit and also in dets.target.textcontent
function makeBubble(){
    var clutter="";
    for(var i=0;i<=95;i++){
    var rn=Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${rn}</div>`;
}
 document.querySelector("#pbtm").innerHTML=clutter;
}
function runTimer(){
    var timerInt= setInterval(() => {
        if(timer>0){
        timer--;
        document.querySelector('#timerVal').textContent=timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector('#pbtm').innerHTML=`<h1>Game Over: Your final score is ${score}</h1>`
        };
    }, 1000);
}
function getNewHit(){
   hitRn= Math.floor(Math.random()*10) 
   document.querySelector("#hitval").textContent=hitRn;
}
function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent= score;
}

document.querySelector('#pbtm').addEventListener('click',function(dets){
    var clickNum=Number(dets.target.textContent);
    if(clickNum===hitRn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})
getNewHit();
runTimer();
makeBubble();
