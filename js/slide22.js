console.log("Please enter an integer.");
var userInput = window.prompt("Please enter an integer.");
while(!isInputValid(userInput)){
    console.log("Please re-enter an integer.");
    userInput = window.prompt("Please re-enter an integer.");
}
console.log("Number "+ userInput + " squared is " + parseInt(userInput) ** 2);

function isInputValid(userInput){
    return Number.isInteger(parseInt(userInput, 10)) && userInput > 0 && userInput < 100;
}