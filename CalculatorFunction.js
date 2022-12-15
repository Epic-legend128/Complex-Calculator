//solve a factorial e.g. factorial of 5( 5! ) is equal to 120
var factorial = function(num) {
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
};
//solve a numerical expression(it uses recursion to solve the parentheses)
var solve = function(expression) {
    //I also turn the expression into an array to make it easier in the future to remove stuff from the expression
    var hasParenth = 0;
    var input = [];
    for (var i = 0; i < expression.length; i++) {
        input.push(expression[i]);
        if (expression[i] === "(" || expression[i] === ")") {
            hasParenth++;
        }
    }
    if (hasParenth > 0) {
        //handle parentheses {
        for (var b = 0; b < hasParenth; b++) {
            var w = 0;
            for (w = 0; input[w] !== "(" && w < input.length; w++) {}
            var back = w;
            var counter = 1;
            for (w = back + 1; counter !== 0 && w < input.length; w++) {
                if (input[w] === "(") {
                    counter++;
                } else if (input[w] === ")") {
                    counter--;
                }
            }
            var front = w - 1;
            var newExpress = "";
            for (w = back + 1; w < front; w++) {
                newExpress += input[w];
            }
            newNumber = solve(newExpress).toString();
            input.splice(back, front - back + 1); //may need a plus 1
            for (w = 0; w < newNumber.length; w++) {
                input.splice(back + w, 0, newNumber[w]);
            }
        }
        //}
    }
    var found = true;
    //factorial solutions {
    while (found) {
        found = false;
        var j = 0;
        while (j < input.length && found !== true) {
            if (input[j] === "!") {
                found = true;
            } else {
                j++;
            }
        }
        if (found) {
            var front = j;
            var back;
            //find num1 {
            var str = "";
            var k = j - 1;
            var tempStr = input[k];
            tempStr = tempStr.charCodeAt();
            while (k >= 0 && (tempStr >= 48 || tempStr === 46) && (tempStr <= 57 || tempStr === 46)) {
                str = input[k] + str;
                k--;
                if (k >= 0 && k < input.length) {
                    tempStr = input[k];
                    tempStr = tempStr.charCodeAt();
                }
            }
            back = k + 1;
            var num1 = parseFloat(str);
            //}
            var newNum = factorial(num1);
            //delete the expression from the array and replace it with the result
            input.splice(back, front - back + 1);
            for (var a = 0; a < newNum.toString().length; a++) {
                input.splice(back + a, 0, newNum.toString()[a]);
            }
        }
    }
    //}
    //powers solutions {
    found = true;
    while (found === true) {
        found = false;
        var j = 0;
        while (j < input.length && found !== true) {
            if (input[j] === "^") {
                found = true;
            } else {
                j++;
            }
        }
        if (found) {
            var back;
            var front;
            //find num1 {
            var str = "";
            var k = j - 1;
            var tempStr = input[k];
            tempStr = tempStr.charCodeAt();
            while (k >= 0 && (tempStr >= 48 || tempStr === 46) && (tempStr <= 57 || tempStr === 46)) {
                str = input[k] + str;
                k--;
                if (k >= 0 && k < input.length) {
                    tempStr = input[k];
                    tempStr = tempStr.charCodeAt();
                }
            }
            //fix for negative numbers
            if (input[k] === "-") {
                if (k === 0) {
                    str = input[k] + str;
                    k--;
                } else {
                    var tempVar = input[k - 1];
                    tempVar = tempVar.charCodeAt();
                    if (tempVar < 48 || tempVar > 57) {
                        str = input[k] + str;
                        k--;
                    }
                }
            }
            back = k + 1;
            var num1 = parseFloat(str);
            //}
            //find num2 {
            str = "";
            k = j + 1;
            tempStr = input[k];
            while (k < input.length && ((tempStr.charCodeAt() >= 48 || tempStr.charCodeAt() === 46) || k === j + 1) && ((tempStr.charCodeAt() <= 57 || tempStr.charCodeAt() === 46) || k === j + 1)) {
                str += input[k];
                k++;
                if (k >= 0 && k < input.length) {
                    tempStr = input[k];
                }
            }
            front = k - 1;
            var num2 = parseFloat(str);
            //}
            var newNum = Math.pow(num1, num2);
            //delete the expression from the array and replace it with the result
            input.splice(back, front - back + 1);
            for (var a = 0; a < newNum.toString().length; a++) {
                input.splice(back + a, 0, newNum.toString()[a]);
            }
        }
    }
    //}
    //multiplication and division solutions {
    found = true;
    while (found === true) {
        found = false;
        var j = 0;
        var sign;
        while (j < input.length && found !== true) {
            if (input[j] === "*" || input[j] === "/") {
                found = true;
                var sign = input[j];
                if (sign === "*") {
                    sign = "mult";
                } else {
                    sign = "div";
                }
            } else {
                j++;
            }
        }
        if (found) {
            var back;
            var front;
            //find num1 {
            var str = "";
            var k = j - 1;
            var tempStr = input[k];
            tempStr = tempStr.charCodeAt();
            while (k >= 0 && (tempStr >= 48 || tempStr === 46) && (tempStr <= 57 || tempStr === 46)) {
                str = input[k] + str;
                k--;
                if (k >= 0 && k < input.length) {
                    tempStr = input[k];
                    tempStr = tempStr.charCodeAt();
                }
            }
            //fix for negative numbers
            if (input[k] === "-") {
                if (k === 0) {
                    str = input[k] + str;
                    k--;
                } else {
                    var tempVar = input[k - 1];
                    tempVar = tempVar.charCodeAt();
                    if (tempVar < 48 || tempVar > 57) {
                        str = input[k] + str;
                        k--;
                    }
                }
            }
            back = k + 1;
            var num1 = parseFloat(str);
            //}
            //find num2 {
            str = "";
            k = j + 1;
            tempStr = input[k];
            while (k < input.length && ((tempStr.charCodeAt() >= 48 || tempStr.charCodeAt() === 46) || k === j + 1) && ((tempStr.charCodeAt() <= 57 || tempStr.charCodeAt() === 46) || k === j + 1)) {
                str += input[k];
                k++;
                if (k >= 0 && k < input.length) {
                    tempStr = input[k];
                }
            }
            front = k - 1;
            var num2 = parseFloat(str);
            //}
            var newNum = solveSimple(sign, num1, num2);
            //delete the expression from the array and replace it with the result
            input.splice(back, front - back + 1);
            for (var a = 0; a < newNum.toString().length; a++) {
                input.splice(back + a, 0, newNum.toString()[a]);
            }
        }
    }
    //}
    //addition and substraction solutions {
    found = true;
    while (found === true) {
        found = false;
        var j = 0;
        var sign;
        while (j < input.length && found !== true) {
            if (input[j] === "+" || input[j] === "-") {
                if (j > 0) {
                    var tempVar = input[j - 1];
                    tempVar = tempVar.charCodeAt();
                    if (!(input[j] === "-" && (tempVar < 48 || tempVar > 57))) {
                        found = true;
                        var sign = input[j];
                        if (sign === "+") {
                            sign = "add";
                        } else {
                            sign = "sub";
                        }
                    }
                } else {
                    j++;
                }
            } else {
                j++;
            }
        }
        if (found) {
            var back;
            var front;
            //find num1 {
            var str = "";
            var k = j - 1;
            var tempStr = input[k];
            tempStr = tempStr.charCodeAt();
            while (k >= 0 && (tempStr >= 48 || tempStr === 46) && (tempStr <= 57 || tempStr === 46)) {
                str = input[k] + str;
                k--;
                if (k >= 0 && k < input.length) {
                    tempStr = input[k];
                    tempStr = tempStr.charCodeAt();
                }
            }
            //fix for negative numbers
            if (input[k] === "-") {
                if (k === 0) {
                    str = input[k] + str;
                    k--;
                } else {
                    var tempVar = input[k - 1];
                    tempVar = tempVar.charCodeAt();
                    if (tempVar < 48 || tempVar > 57) {
                        str = input[k] + str;
                        k--;
                    }
                }
            }
            back = k + 1;
            var num1 = parseFloat(str);
            //}
            //find num2 {
            str = "";
            k = j + 1;
            tempStr = input[k];
            while (k < input.length && ((tempStr.charCodeAt() >= 48 || tempStr.charCodeAt() === 46) || k === j + 1) && ((tempStr.charCodeAt() <= 57 || tempStr.charCodeAt() === 46) || k === j + 1)) {
                str += input[k];
                k++;
                if (k >= 0 && k < input.length) {
                    tempStr = input[k];
                }
            }
            front = k - 1;
            var num2 = parseFloat(str);
            //}
            var newNum = solveSimple(sign, num1, num2);
            //delete the expression from the array and replace it with the result
            input.splice(back, front - back + 1);
            for (var a = 0; a < newNum.toString().length; a++) {
                input.splice(back + a, 0, newNum.toString()[a]);
            }
        }
    }
    //}
    var result = "";
    for (var h = 0; h < input.length; h++) {
        result += input[h];
    }
    return result;
};
//solve only a simple expression
var solveSimple = function(action, num1, num2) {
    if (action === "add") {
        return num1 + num2;
    } else if (action === "sub") {
        return num1 - num2;
    } else if (action === "mult") {
        return num1 * num2;
    } else if (action === "div") {
        return num1 / num2;
    }
};
//make sure the input is valid(of course it doesn't filter everything that could make the program break but it checks most of the things)
var filter = function(input) {
    var parenthesis = 0;
    //valid symbols, though [] and {} are not valid but are converted to () by the format() function
    var validSymbols = "+-*/ ().^![]{}0123456789";
    for (var i = 0; i < input.length; i++) {
        if (!validSymbols.includes(input[i])) {
            return false;
        }
        
        //checks the amout of parentheses
        if ("([{".includes(input[i])) {
            parenthesis++;
        } else if (")]}".includes(input[i])) {
            parenthesis--;
        }
    }
    if (parenthesis != 0) {
        return false;
    }
    return true;
};

//formats the numeric expression to be suitable for the solve() function to use
var format = function(input) {
    //remove spaces and replace [] and {} with ()
    var newInput = "";
    var match = {
        '[': '(',
        '{': '(',
        ']': ')',
        '}': ')'
    }
    for (var i = 0; i < input.length; i++) {
        if (input[i] !== " ") {
            if (input[i] in match) {
                newInput += match[input[i]];
            }
            else {
                newInput += input[i];
            }
        }
    }
    return newInput;
};

//an expression for the program to solve
var expr = "(3+150/5-16*2)+4^2*3";
if (filter(expr)) {
    console.log(solve(format(expr)));
}
else {
    console.log("Wrong format!");
}
