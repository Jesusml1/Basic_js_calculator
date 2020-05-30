// KEYPAD INPUT
function addZero() {
    var input = document.querySelector("#display-input > input[type=text]"); 
    input.value += "0";
}
function addOne() {
    var input = document.querySelector("#display-input > input[type=text]"); 
    input.value += "1";
}
function addTwo() {
    var input = document.querySelector("#display-input > input[type=text]"); 
    input.value += "2";
}
function addThree() {
    var input = document.querySelector("#display-input > input[type=text]"); 
    input.value += "3";
}
function addFour() {
    var input = document.querySelector("#display-input > input[type=text]"); 
    input.value += "4";
}
function addFive() {
    var input = document.querySelector("#display-input > input[type=text]"); 
    input.value += "5";
}
function addSix() {
    var input = document.querySelector("#display-input > input[type=text]"); 
    input.value += "6";
}
function addSeven() {
    var input = document.querySelector("#display-input > input[type=text]"); 
    input.value += "7";
}
function addEight() {
    var input = document.querySelector("#display-input > input[type=text]"); 
    input.value += "8";
}
function addNine() {
    var input = document.querySelector("#display-input > input[type=text]"); 
    input.value += "9";
}
function addPlus() {
    var input = document.querySelector("#display-input > input[type=text]"); 
    input.value += "+";
}
function addMinus() {
    var input = document.querySelector("#display-input > input[type=text]"); 
    input.value += "-";
}
function addMul() {
    var input = document.querySelector("#display-input > input[type=text]"); 
    input.value += "x";
}
function addDiv() {
    var input = document.querySelector("#display-input > input[type=text]"); 
    input.value += "/";
}
function addDot() {
    var input = document.querySelector("#display-input > input[type=text]"); 
    input.value += ".";
}
function addPow() {
    var input = document.querySelector("#display-input > input[type=text]"); 
    input.value += "^";
}
function addSqtr() {
    var input = document.querySelector("#display-input > input[type=text]"); 
    input.value += "√";
}
function ac() {
    var input = document.querySelector("#display-input > input[type=text]"); 
    let output = document.querySelector("#display-result > output"); 
    input.value = "";
    output.value = "";
}
function del() {
    var input = document.querySelector("#display-input > input[type=text]"); 
    input.value = input.value.slice(0, input.value.length - 1);
}


// FOR INDIVIDUAL OPERATIONS (THREE CHARACTERS)
function op(operation) {
    let ifDot = /(\.)/; 
    if(ifDot.test(operation)) {
        var num1 = parseFloat(operation[0]);
        var num2 = parseFloat(operation[2]);    
    } else {
        var num1 = parseInt(operation[0], 10);
        var num2 = parseInt(operation[2], 10);
    }
    
    switch (operation[1]) {
        case "x":
            let mulResult = num1 * num2;
            mulResult = Number.isInteger(mulResult) ? (mulResult.toString(10)) : (mulResult = mulResult.toFixed(3), mulResult.toString(10));
            return mulResult;
        case "/":
            let divResult = num1 / num2;
            divResult = Number.isInteger(divResult) ? (divResult.toString(10)) : (divResult = divResult.toFixed(3), divResult.toString(10));
            return divResult;
        case "+":
            let sumResult = num1 + num2;
            sumResult = Number.isInteger(sumResult) ? (sumResult.toString(10)) : (sumResult = sumResult.toFixed(3), sumResult.toString(10));
            return sumResult;
        case "-":
            let subResult = num1 - num2;
            subResult = Number.isInteger(subResult) ? (subResult.toString(10)) : (subResult = subResult.toFixed(3), subResult.toString(10));
            return subResult;
        case "^":
            let powerResult = Math.pow(num1, num2);
            powerResult = Number.isInteger(powerResult) ? (powerResult.toString(10)) : (powerResult = powerResult.toFixed(3), powerResult.toString(10));
            return powerResult;
    }
}

// FOR SQUARE ROOT (TWO CHARACTERS)
function squareRoot(operation) {
    let num = operation[1];
    let result = Math.sqrt(num);
    result = Number.isInteger(result) ? (result.toString(10)) : (result = result.toFixed(3), result.toString(10));
    return result;
}


// CALCULATION
function calc() {
    //const justNumber = /\D/g;
    //const withOperator = /\+\-\x\/\√\^/g;
    const letters =  /[a-z]|[A-Z]/g;
    const splitter = /(\+|\-|\x|\/|\√|\^)/;

    let exp = document.querySelector("#display-input > input[type=text]").value;
    let expList = exp.split(splitter);
    console.log(expList);

    // EVALUATION BLOCK
    while(expList.length > 1){
        // FOR ROOT EXTRACTION AND EXPONENTIATION
        while(expList.includes("√") || expList.includes("^")){
            for(let i = 0; i < expList.length - 1; i++){ 
                switch(expList[i]){
                    case "√":
                        let sqrtOperation = expList.slice(i, i + 2);
                        let sqrt_parcial_result = squareRoot(sqrtOperation);
                        expList.splice(i - 1, 1);
                        expList.splice(i - 1, 2, sqrt_parcial_result);
                        break;
                    case "^":
                        let powOperation = expList.slice(i - 1, i + 2);
                        let pow_parcial_result = op(powOperation);
                        expList.splice(i - 1, 3, pow_parcial_result);
                        break;
                }   
            }
        }
        console.log(expList);
        // FOR MULTIPLICATION AND DIVITION
        while(expList.includes("x") || expList.includes("/")){ 
            for(let i = 0; i < expList.length - 1; i++){ 
                switch(expList[i]){
                    case "x":
                        let mulOperation = expList.slice(i - 1, i + 2);
                        let mul_parcial_result = op(mulOperation);
                        expList.splice(i - 1, 3, mul_parcial_result);
                        break;
                    case "/":
                        let divOperation = expList.slice(i - 1, i + 2);
                        let div_parcial_result = op(divOperation);
                        expList.splice(i - 1, 3, div_parcial_result);
                        break;
                }   
            }
        }
        console.log(expList);
        //FOR ADITION AND SUBSTRACTION
        while(expList.includes("+") || expList.includes("-")){
            for(let i = 0; i < expList.length - 1; i++){
                switch(expList[i]) {
                    case "+":
                        let sumOperation = expList.slice(i - 1, i + 2);
                        let sum_parcial_result = op(sumOperation);
                        expList.splice(i - 1, 3, sum_parcial_result);
                        break;
                    case "-":
                        let subOperation = expList.slice(i - 1, i + 2);
                        let sub_parcial_result = op(subOperation);
                        expList.splice(i - 1, 3, sub_parcial_result);
                        break;
                }
            }
        }
        console.log(expList);
    } 
    let finalResult = parseInt(expList, 10);
    
    // ERROR AND RESULT DISPLAY  
    if (expList == "Infinity"){
        document.querySelector("#display-result > output").value = "Math Error";    
    } else if (expList == "NaN") {
        document.querySelector("#display-result > output").value = "Syntax Error"; 
    } else if (!Number.isSafeInteger(finalResult)){
        document.querySelector("#display-result > output").value = "OUT OF RANGE";
    }
    else {
        document.querySelector("#display-result > output").value = expList;
        document.querySelector("#display-input > input[type=text]").value = "";
    }
}

// COLOR THEME TOGGLE

const colorSwitch = document.getElementById("color-switch");

colorSwitch.addEventListener('click',checkMode);

function checkMode() {
    if (colorSwitch.checked){
        darkModeOn();
    } else {
        darkModeOff();
    }
}

function darkModeOn() {
    document.body.classList.add("dark-theme");
}

function darkModeOff() {
    document.body.classList.remove("dark-theme");
}

