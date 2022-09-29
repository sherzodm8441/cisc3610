let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext('2d')

//Stars
for(let i = 0; i < 100; i++){
    context.beginPath();
    context.fillStyle = '#fbec5d';
    context.arc(Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * (window.innerHeight / 1.5)), 2, 0, Math.PI * 2, false);
    context.fill();
    context.strokeStyle = '#fbec5d';
    context.stroke();
}


//gradient for moon
var grd = context.createLinearGradient(0,100,100,100);
grd.addColorStop(0,"yellow");
grd.addColorStop(1,"black");
//Moon
context.beginPath();
context.fillStyle = grd;
context.arc(75, 75, 60, 0, Math.PI * 2, false);
context.fill();
context.strokeStyle = 'black';
context.stroke();

//Ground
context.beginPath();
context.fillStyle = "darkgreen"
context.fillRect(0, window.innerHeight / 1.5, window.innerWidth, window.innerHeight);

//River
context.beginPath();
context.moveTo(750,window.innerHeight / 1.5);
context.lineTo(600,window.innerHeight);
context.lineTo(850,window.innerHeight);
context.lineTo(900,window.innerHeight / 1.5);
context.fillStyle="blue";
context.fill();
context.closePath();
context.stroke();


//House
context.fillStyle = "#AF4F3B"
context.fillRect(100, window.innerHeight / 1.7, 350, 250)
    //roof
context.beginPath();
context.moveTo(10,window.innerHeight / 1.7);
context.lineTo(280,window.innerHeight / 2.3);
context.lineTo(550,window.innerHeight / 1.7);
context.fillStyle="grey";
context.fill();
context.closePath();
context.stroke();
    //door
context.fillStyle = "#147D65"
context.fillRect(325, window.innerHeight / 1.45, 90, 166);
    //window
context.fillStyle = "yellow"
context.fillRect(145, window.innerHeight / 1.45, 50, 50)
context.fillRect(145, window.innerHeight / 1.32, 50, 50)
context.fillRect(200, window.innerHeight / 1.45, 50, 50)
context.fillRect(200, window.innerHeight / 1.32, 50, 50)


//Tree
context.fillStyle = "#763F14";
context.fillRect(1100, window.innerHeight / 1.7, 75, 250);
    //triangle body
context.beginPath();
context.moveTo(960,window.innerHeight / 1.6);
context.lineTo(1130,window.innerHeight / 2);
context.lineTo(1300,window.innerHeight / 1.6);
context.fillStyle="green";
context.fill();
context.closePath();
context.stroke();

context.beginPath();
context.moveTo(960,window.innerHeight / 1.8);
context.lineTo(1130,window.innerHeight / 2.2);
context.lineTo(1300,window.innerHeight / 1.8);
context.fillStyle="green";
context.fill();
context.closePath();
context.stroke();

context.beginPath();
context.moveTo(960,window.innerHeight / 2);
context.lineTo(1130,window.innerHeight / 2.4);
context.lineTo(1300,window.innerHeight / 2);
context.fillStyle="green";
context.fill();
context.closePath();
context.stroke();

//Text
context.fillStyle = "white"
context.font = "30px Ariel"
context.fillText("Starry Night? :)", 200, window.innerHeight / 1.8);

