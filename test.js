
    let expList = exp.split(splitter);
    console.log(expList);

    while(expList.length > 2){

        while(expList.includes("√") || expList.includes("^")){
            for(let i = 0; i < expList.length - 1; i++){ 
                switch(expList[i]){
                    case "√":
                        let sqrtOperation = expList.slice(i, i + 2);
                        let sqrt_parcial_result = squareRoot(sqrtOperation);
                        expList.splice(i, 2, sqrt_parcial_result);
                        break;
                    case "^":
                        let divOperation = expList.slice(i - 1, i + 2);
                        let div_parcial_result = op(divOperation);
                        expList.splice(i - 1, 3, div_parcial_result);
                        break;
                }   
            }
        }
        console.log(expList);

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
    
    if (expList == "Infinity"){
        document.querySelector("#display-result > output").value = "Math Error";    
    } else if (expList == "NaN") {
        document.querySelector("#display-result > output").value = "Syntax Error"; 
    } else {
        document.querySelector("#display-result > output").value = expList;
    }
