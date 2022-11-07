let canvas = document.querySelector('canvas');

canvas.width = 600;
canvas.height = 600;

let context = canvas.getContext('2d');

let radius = 25;
let defaultFill = "black"
let fill = ""

context.fillStyle = fill || defaultFill;
context.beginPath();
context.arc(canvas.width/2, canvas.height/2, radius, 0, 2 * Math.PI);
context.fill();
context.stroke();

const speechRecognition = new window.webkitSpeechRecognition();


function reColor(){
    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2, radius, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
}


speechRecognition.onresult = (event) => {
    console.log(event);
    console.log("listening")
    

    // // Loop through the results from the speech recognition object.
    // for (let i = event.resultIndex; i < event.results.length; ++i) {
    //   // If the result item is Final, add it to Final Transcript, Else add it to Interim transcript
    //   if (event.results[i].isFinal) {
    //     final_transcript += event.results[i][0].transcript;
    //   } else {
    //     interim_transcript += event.results[i][0].transcript;
    //   }
    // }

};

speechRecognition.onerror = (event) => {
    console.log(event.error);
  };




document.querySelector("#btn").onclick = () => {
    // Start the Speech Recognition
    if(document.querySelector("#btn").value !== "Stop"){
        document.querySelector("#btn").value = "Stop";
        speechRecognition.start();
    }else{
        document.querySelector("#btn").value = "Speak";
        speechRecognition.stop();
    }
};

speechRecognition.onend = () => {
    document.querySelector("#btn").value = "Speak";
}
 