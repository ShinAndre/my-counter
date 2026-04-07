"use strict";
// Creiamo dinamicamente gli elementi all interno del DOM;

const addButton = document.createElement("button");
const removeButton = document.createElement("button");
const body = document.getElementById("body");
const div = document.createElement("div");
let counter = document.createElement("p");
const buttonCounter = document.createElement("div");
const bgContainer = document.createElement("div");
const title = document.createElement("h4");
const resetButton = document.createElement("button");

//Inizializziamo la nostra variabile del counter

let numberCount = localStorage.getItem('Counter') || 0;


const buildHtml = () => {
  //Assegnamo una classe agli elementi interessati
  
  counter.className = "counter";
  div.className = "container";
  bgContainer.className = "bgContainer";
  addButton.className = "Button";
  removeButton.className = "Button";
  resetButton.className = "resetButton"
  buttonCounter.className = "divButton";
  title.className = "title"
  
  // "Appendiamo" tutti gli elementi creati dinamicamente nel DOM
  
  div.appendChild(bgContainer);
  bgContainer.appendChild(title)
  buttonCounter.appendChild(resetButton)
  buttonCounter.appendChild(addButton);
  buttonCounter.appendChild(removeButton);
  div.appendChild(counter);
  body.appendChild(div);
  body.appendChild(buttonCounter);
  div.appendChild(buttonCounter);
  bgContainer.appendChild(counter)
  bgContainer.appendChild(buttonCounter)
  
  // Assegnamo un valore agli elementi interessati
  
  addButton.textContent = "+";
  removeButton.textContent = "-";
  title.textContent = "Counter"
  resetButton.textContent = "Reset"
  counter.textContent = numberCount;
}

buildHtml();

const toggleCounter = (method) => {
    switchCounter(method)
    localStorage.setItem('Counter', numberCount)
}

const resetCounter = () => {
    counter.textContent = 0;
    numberCount = 0;
    localStorage.removeItem('Counter')
}


//creiamo una funzione che ci permetta di aumentare o diminuire il valore del nostro counter

const switchCounter = (choose) => {
  switch (choose) {
  case "plusCounter":
    numberCount++;
      counter.textContent = numberCount;
      break;
    case "minusCounter":
      numberCount--;
      counter.textContent = numberCount;
      break;
    default:
      break;
  }
};


//aggiungiamo degli eventi per utilizzarli poi dinamicamente all interno dei nostri "pulsanti"

addButton.addEventListener("click",() => toggleCounter("plusCounter"));

removeButton.addEventListener("click",() => toggleCounter("minusCounter"));

resetButton.addEventListener("click",() => resetCounter())