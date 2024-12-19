const addUpToResult = document.getElementById("addUpToReault");
const inputAddUpTo = document.querySelector("#addUpTo input");
const buttonAddUpTo = document.querySelector("#addUpTo button");

buttonAddUpTo.addEventListener("click", function(){
    for (let numberCol of allNumbers){
        for (let numberRow of allNumbers){
            let sum = Number(numberCol.textContent) + Number(numberRow.textContent)
            if(sum == inputAddUpTo.value && numberCol != numberRow){
                numberCol.classList.toggle("addedUpTo")
                numberRow.classList.toggle("addedUpTo")
                return;
            }
        }
    }
})