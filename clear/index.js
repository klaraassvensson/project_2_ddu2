const button = document.getElementById("fillClearedButton");

numbersDiv.addEventListener("mouseover", function(event){
    const numberDiv = event.target;
    if(numberDiv.classList.contains("number")){
        numberDiv.classList.add("mouseover");
    }
})
numbersDiv.addEventListener("click", function(event){
    const numberDiv = event.target;
    if(numberDiv.classList.contains("number")){
        numberDiv.classList.add("click");
        numberDiv.classList.remove("mouseover")
        numberDiv.textContent = "";
    }
})
numbersDiv.addEventListener("mouseout", function(event){
    const numberDiv = event.target;
    if(numberDiv.classList.contains("number")){
        numberDiv.style.backgroundColor = "rgb(200 28 28)";
    }
})
