let moo = document.getElementById("moo");
let oink = document.getElementById("oink");
let neigh = document.getElementById("neigh");
let baa = document.getElementById("baa");
let crowing = document.getElementById("crowing");
let bleating = document.getElementById("bleating");


function playMoo(event){
    event.preventDefault();
    moo.play();
}

function playOink(event){
    event.preventDefault();
    oink.play();
}

function playNeigh(event){
    event.preventDefault();
    neigh.play();
}

function playBaa(event){
    event.preventDefault();
    baa.play();
}

function playCrowing(event){
    event.preventDefault();
    crowing.play();
}

function playBleating(event){
    event.preventDefault();
    bleating.play();
}