const defaultObj = {
    fname: "",
    lname: "",
    bColor: "#FFFFFF",
    tColor: "#000000",
    font: "Arial",
    fontSize: 12
}

let obj = JSON.parse(localStorage.getItem('textForm')) || defaultObj;


document.getElementById("fname").value = obj.fname;
document.getElementById("lname").value = obj.lname;
document.getElementById("bColor").value = obj.bColor;
document.getElementById("tColor").value = obj.tColor;
document.getElementById(obj.font.toLowerCase()).checked = true;
document.getElementById("slider").value = obj.fontSize;

function printInput(){
    document.getElementById('output').style.backgroundColor = obj.bColor;

    const para = document.getElementById('para');
    para.style.color = obj.tColor;
    para.style.fontFamily = obj.font;
    para.style.fontSize = `${obj.fontSize}px`;
    para.innerHTML = obj.fname + " " + obj.lname;

}

printInput();

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    obj.fname = document.getElementById("fname").value;
    obj.lname = document.getElementById("lname").value;
    obj.bColor = document.getElementById("bColor").value;
    obj.tColor = document.getElementById("tColor").value;
    obj.font = document.querySelector('input[name="font"]:checked').value;
    obj.fontSize = document.getElementById("slider").value;

    localStorage.setItem('textForm', JSON.stringify(obj));

    printInput();
})

document.getElementById('reset').onclick = function () {
    obj = defaultObj;
    localStorage.setItem('textForm', JSON.stringify(obj));
    document.getElementById("fname").value = obj.fname;
    document.getElementById("lname").value = obj.lname;
    document.getElementById("bColor").value = obj.bColor;
    document.getElementById("tColor").value = obj.tColor;
    document.getElementById(obj.font.toLowerCase()).checked = true;
    document.getElementById("slider").value = obj.fontSize;
    printInput();
}


