//Get Lower Value
var lowerInput = window.prompt("Please enter L:");
while(!Number.isInteger(parseInt(lowerInput, 10))){
    var lowerInput = window.prompt("Please enter L:");
}
var lower = parseInt(lowerInput, 10);

//Get Upper Value
var upperInput = window.prompt("Please enter U:");
while(!Number.isInteger(parseInt(upperInput, 10)) && parseInt(upperInput, 10) < lower){
    var upperInput = window.prompt("Please enter U:");
}
var upper = parseInt(upperInput, 10);

//Print all Integers between Lower (inclusive) and Upper (exclusive)
var words = "";
while(lower < upper){
    words += lower + " ";
    lower++;
}
console.log(words);