const fruit = [
	{name:"Strawberry", quantity:15, color:"red"},
	{name:"Peach", quantity:10, color:"orange"},
	{name:"Banana", quantity:25, color:"yellow"},
	{name:"Pear", quantity:10, color:"brown"},
	{name:"Grape", quantity:20, color:"lightgreen"},
];

let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext('2d')

context.fillStyle = "black"
context.beginPath();
context.moveTo(100, 50);
context.lineTo(100, 650);
context.closePath();
context.stroke();

context.beginPath();
context.moveTo(75, 625);
context.lineTo(1000, 625);
context.closePath();
context.stroke();



for(let i = 0; i < fruit.length; i++){
    context.save();
    context.translate(0, canvas.height);
    context.scale(1, -1);

    context.fillStyle = fruit[i].color;
    context.fillRect(150 * (i + 1), window.innerHeight / 4, 150, 20 * fruit[i].quantity);

    context.restore();
    context.fillStyle = "black";
    context.font = "25px Ariel"
    context.fillText(fruit[i].name, 150 * (i + 1) + 15, window.innerHeight / 1.25);
    context.font = "40px Ariel"
    context.fillText(fruit[i].quantity, 150 * (i + 1) + 50, window.innerHeight / 1.4 - (20 * fruit[i].quantity));
}

    



