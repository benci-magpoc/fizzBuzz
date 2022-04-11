function getValues() {
    let firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;

    displayValues(parseInt(firstNumber), parseInt(secondNumber));
}


function displayValues(firstDigit, secondDigit) {

    element = document.getElementById("results");


    for (let i = 1; i < 101; i++) {

        let item = document.createElement("div");

        //set the items to the div
        item.classList.add("col-12");
        item.classList.add("col-md-3");
        item.innerHTML = i;
        element.appendChild(item);

        if (i % firstDigit == 0) {
            item.classList.add("boldItem");
            item.innerHTML += " Fizz";
        }

        if (i % secondDigit == 0) {
            item.classList.add("boldItem");
            item.innerHTML += " Buzz";
        }


    }

    element.appendChild()
    //fizz = 3
    //Buzz = 5

    //display a list of numbers from 1 to 100

    //write a for loop to display from 1 to 100

    //for each number do the following:
    //test if they are divisible by fizz and buzz
    //if true replace the current number with 'FIZZBUZZ'

    //test if they are ONLY divisible by fizz
    //if true replace currrent number with 'FIZZ'

    //test if they are ONLY divisible by buzz
    //if true replace current number with 'BUZZ'

    //finally just print the number

    //display the number or string on the page. Hint: Link Hundo!

}

function clearList() {
    document.getElementById("results").innerHTML = "";

}