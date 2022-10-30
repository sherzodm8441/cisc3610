let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

let context = canvas.getContext('2d');


let frames = 7; //8 bc 0 included
const fps = 24;

img = new Image();
img.src = "tile003.png";

//boy
img2 = new Image();
img2.src = "boy.png";

let x = -50;
let y = CANVAS_HEIGHT/2 - 70;


let x2 = 150;
let y2 = CANVAS_HEIGHT/2 - 50;

let delta = 4;

let img3 = new Image();
img3.src = "tombstone1.png";

function animate(){
    if(frames < 8){
        context.clearRect(0 , 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        //grass
        context.fillStyle = "darkgreen";
        context.fillRect(0, 0, canvas.width, canvas.height);

        //tombstones
        for(let i = 0; i < 16; i++){
            for(let j = 0; j < 3; j++){
                if(j % 2 != 0){
                    context.drawImage(img3, 100, 100, 840, 800, 100 * i +60, 100 * j +20, 50, 60);
                }else{
                    context.drawImage(img3, 100, 100, 840, 800, 100 * i +10, 100 * j +20, 50, 60);
                }
                
            }
        }
        for(let i = 0; i < 16; i++){
            for(let j = 0; j < 3; j++){
                if(j % 2 != 0){
                    context.drawImage(img3, 100, 100, 840, 800, 100 * i +60, 100 * j +(CANVAS_HEIGHT/2 + 100), 50, 60);
                }else{
                    context.drawImage(img3, 100, 100, 840, 800, 100 * i +10, 100 * j +(CANVAS_HEIGHT/2 + 100), 50, 60);
                }
                
            }
        }
        

        //walkway
        context.beginPath();
        context.fillStyle = "grey";
        context.fillRect(0, CANVAS_HEIGHT/2 - 75, CANVAS_WIDTH, 150);
        context.stroke();


        context.font = "20px Comic Sans MS";

        //ghost
        context.fillStyle = "black"
        context.fillText("BOO!!!", x - 20, y - 20);
        context.drawImage(img, 44 * frames + 1, 0, 44, 50, x, y, 44, 51);

        //boy
        context.fillText("AAGHH!!!", x2 - 20, y2 - 20);
        context.drawImage(img2, 300 * Math.floor(frames/2), 1350, 300, 450, x2, y2, 44, 60);
        
    }else{
        frames = 0;
    }
    
    

    frames++;

    x+= delta;
    x2+= delta;

    if(x > CANVAS_WIDTH){
        x = -100;
        x2 = 0;
    }
    

    setTimeout(() => {
        requestAnimationFrame(animate);
    }, 1000/fps);
    
}
animate();

