function getValues() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {

        //assign fizzBuzzAlgorithm return value to fizzBuzzValues
        let fizzBuzzValues = fizzBuzzAlgorithm(firstNumber, secondNumber, startValue, endValue);
        //display the values
        displayValues(fizzBuzzValues);

    } else {
        alert("You muuse enter Integers!");
    }
}


function clearList() {
    document.getElementById("results").innerHTML = "";

}

//business logic layer - Model
function fizzBuzzAlgorithm(fizz, buzz, start, end) {

    let fbValues = [];

    for (let i = start; i <= end; i++) {

        if (i % fizz == 0 && i % buzz == 0) {

            fbValues.push('FizzBuzz');

        } else if (i % fizz == 0) {

            fbValues.push('Fizz');

        } else if (i % buzz == 0) {

            fbValues.push('Buzz');

        } else {

            fbValues.push(i);

        }
    }

    return fbValues;
}

function displayValues(fizzBuzzDisplayed) {

    element = document.getElementById("results");

    fizzBuzzDisplayed.forEach(e => {
        let item = document.createElement("div");
        item.classList.add("col-lg-2");
        item.classList.add("col-md-6");
        item.classList.add("border");

        if (e == 'FizzBuzz') {
            item.classList.add("fizzBuzz");
        } else if (e == 'Fizz') {
            item.classList.add("fizz");
        } else if (e == 'Buzz') {
            item.classList.add('buzz');
        }
        item.innerHTML = e;
        element.appendChild(item);

    });

    // for (let i = 1; i <= fizzBuzzDisplayed.length; i++) {

    //     let item = document.createElement("div");

    //     //set the items to the div
    //     item.classList.add("col-12");
    //     item.classList.add("col-md-2");
    //     item.innerHTML = i;

    //     if (i % firstDigit == 0 && i % secondDigit == 0) {
    //         item.classList.add("pinkColor");
    //         item.classList.add("boldItem");
    //         item.innerHTML = "";
    //         item.innerHTML += "FizzBuzz";
    //     } else if (i % firstDigit == 0) {
    //         item.classList.add("messageClass");
    //         item.innerHTML = "";
    //         item.innerHTML += "Fizz";
    //     } else if (i % secondDigit == 0) {
    //         item.classList.add("messageClass");
    //         item.innerHTML = "";
    //         item.innerHTML += "Buzz";
    //     }

    //     element.appendChild(item);

    // }
}