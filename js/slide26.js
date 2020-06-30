for(var index = 0; 59 >= index; index++){
    console.log("" + index + " " + fibonacci2(index));
}

// function fibonacci(value){
//     if(value == 0){
//         return 0;
//     } else if(value == 1){
//         return 1;
//     }

//     return fibonacci(value - 1) + fibonacci(value - 2);
// }

function fibonacci2(value){
    if(value == 0){
        return 0;
    } else if(value == 1){
        return 1;
    }
    
    //Cycle through to the nth position
    var start = 0;
    var end = 1;
    var answer = 1;
    for(var index = 2; value >= index; index++){
        answer = start + end;
        start = end;
        end = answer;
    }
    return answer;
}