const sumAllDOM = document.getElementById("sumResultAll");
const sumMarkedDOM = document.getElementById("sumResultMarked");
const resetButton = document.getElementById("reset");

function addEveryNumber (){
    let totalSum = 0
    for (let number of allNumbers){
        totalSum += parseInt(number.textContent);
    }
    sumAllDOM.textContent = totalSum;
}

function addMarked () {
    let markedSum = 0
    
    for (let number of allNumbers){
        if(number.classList.contains("marked")) {
            markedSum += parseInt(number.textContent)
        };
    }
    sumMarkedDOM.textContent = markedSum;
}

buttonDOM.addEventListener("click", function (){    
    addEveryNumber();
})

numbersDiv.addEventListener("click", function(event){
    const numberDiv = event.target;
    numberDiv.classList.toggle("marked");
    addMarked ();
})

resetButton.addEventListener("click", function (){
    for (let number of allNumbers){
        if(number.classList.contains("marked")){
            number.classList.remove("marked")
        }
    }
    addMarked()
    
})