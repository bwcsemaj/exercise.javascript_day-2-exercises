//Create an array my Data of 10 integers
var myData = new Array(10);

//Fill array with 1 values
for (var index = 0; myData.length > index; index++) {
    myData[index] = 1;
}

//Ask user for new values for indexes until user enters an invalid index
while(true){
    console.log(myData);
    var indexInput = window.prompt("Please enter index you would like to change:");
    if (!Number.isInteger(parseInt(indexInput, 10))) {
        break;
    }
    var index = parseInt(indexInput, 10);
    if(index < 0 || index >= 10){
        break;
    }

    var valueInput = window.prompt("Please enter value for index "+ index + ":");
    myData[index] = valueInput;
}