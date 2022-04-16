'use strict'

var counter = document.getElementById("counter");
var contSample = 0;
const btnIncrease = document.querySelector(".increase");
const btnReset = document.querySelector(".reset");
const btnDecrease = document.querySelector(".decrease");

btnIncrease.addEventListener('click' , increaseCounter);
btnReset.addEventListener('click' , resetCounter);
btnDecrease.addEventListener('click' , decreaseCounter);

function increaseCounter () {
    counter.innerHTML = ++contSample;
    console.log(counter);
}

function resetCounter () {
    contSample = 0
    counter.innerHTML = contSample;
}

function decreaseCounter () {
    counter.innerHTML = --contSample;
}