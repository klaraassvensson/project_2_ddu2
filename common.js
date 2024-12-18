const creatorDiv = document.getElementById("creator");
const numbersDOM = document.getElementById("numbers")
const numbersDiv = document.getElementById("numbers");
const allNumbers = document.getElementById("numbers").children;


const divNumbers = document.createElement("div");
creatorDiv.appendChild(divNumbers);
divNumbers.textContent = "How many numbers in the grid?"

const inputDOM = document.createElement("input");
creatorDiv.appendChild(inputDOM);
inputDOM.setAttribute("type", "numbers");
inputDOM.setAttribute("placeholder", "Please write a number");


const buttonDOM = document.createElement("button");
creatorDiv.appendChild(buttonDOM)
buttonDOM.textContent = "Create"
buttonDOM.addEventListener("click", function (){    
    createNumbersGrid(inputDOM.value); 
})

function randomInt (max){
    return Math.floor(Math.random() * max)
}

function createNumbersGrid(n){
    if (n > 99) return;
    numbersDOM.innerHTML = ""
    for (let i = 0; i < n; i++ ){
        let randomNumber = randomInt(100)
        const numberDiv = document.createElement("div");
        numbersDOM.appendChild(numberDiv);
        numberDiv.textContent = randomNumber
        numberDiv.classList.add("number")
    }
}

