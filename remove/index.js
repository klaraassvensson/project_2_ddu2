const buttonNewNumber = document.querySelector("#newNumber");
const randomNumberDiv = document.getElementById("randomNumber");
const removeButton = document.getElementById("removeButton");
const removedDiv = document.getElementById("removedDiv");

buttonNewNumber.addEventListener("click", function(){
    let randomNumber = randomInt()
    randomNumberDiv.textContent = randomNumber;
    for (let number of allNumbers){
        if(number.textContent == randomNumber) {
            number.classList.add("matchMarked")
        };
    }

})

removeButton.addEventListener("click", function(){
    let counter = 0;
    for (let number of allNumbers){
        if(number.classList.contains("matchMarked")) {
            number.classList.add("removed");
            number.textContent = "X"
            counter ++;
        };
    }
    removedDiv.textContent = `Number ${randomNumberDiv.textContent} has been removed ${counter} times`
})
