function evenNum(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    // check if the numbers fit criteria
    if (num1 <= 2 || num1 >= 100){
        console.log(parseInt(num1,10));
        document.getElementById("msg").innerHTML += "Number 1 input" + num1 + " is not a valid number.";
        document.getElementById("result").innerHTML = "";
        document.getElementById("msg").style.color = "red";
        document.getElementById("result").style.color = "red";
    }
    if (num2 <= 2 || num2 >= 100){
        document.getElementById("msg").innerHTML += "Number 1 input" + num2 + " is not a valid number.";
        document.getElementById("result").innerHTML = "";
        document.getElementById("msg").style.color = "red";
        document.getElementById("result").style.color = "red";
    }
    else if (num1 >= 2 && num1 <= 100 && num2 >= 2 && num2 <= 100){
        calculateEvenNum(num1,num2);
    }
}
function calculateEvenNum(firstNum, secondNum){
    var eNumArray = [];
    var sNum = 0;
    var bNum = 0;

    if (firstNum > secondNum){
        sNum = secondNum;
        bNum = firstNum;
    }
    else if (firstNum < secondNum){
        sNum = firstNum;
        bNum = secondNum;
    }

    while(sNum <= bNum){
        if(isEven(sNum) == true){
            eNumArray.push(sNum);
            sNum = sNum + 1;
        }
        else if (isEven(sNum) == false){
            sNum = sNum + 1;
        }
    }
    console.log(eNumArray);
    document.getElementById("result").innerHTML = "There are " + eNumArray.length +" even numbers:";
    document.getElementById("msg").innerHTML = eNumArray;
}

function isEven(num) {
    res = true;
    for (var i=num; i<=num+1; i++){
        if (num%2 == 0){
            res = true;
        }
        else{
            res = false;
        }
        return res;
    }
}