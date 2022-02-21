function btn1 () { 
    const x = document.getElementById("ok3")
    x.insertAdjacentText("beforeend", "1");
}
function btn2 () { 
    const x = document.getElementById("ok3")
    x.insertAdjacentText("beforeend", "2"); 
}
function btn3 () { 
    const x = document.getElementById("ok3")
    x.insertAdjacentText("beforeend", "3");
}
function btn4 () { 
    const x = document.getElementById("ok3")
    x.insertAdjacentText("beforeend", "4");
}
function btn5 () { 
    const x = document.getElementById("ok3")
    x.insertAdjacentText("beforeend", "5");
}
function btn6 () { 
    const x = document.getElementById("ok3")
    x.insertAdjacentText("beforeend", "6");
}
function btn7 () { 
    const x = document.getElementById("ok3")
    x.insertAdjacentText("beforeend", "7");
}
function btn8 () { 
    const x = document.getElementById("ok3")
    x.insertAdjacentText("beforeend", "8");
}
function btn9 () { 
    const x = document.getElementById("ok3")
    x.insertAdjacentText("beforeend", "9");
}
function btn0 () { 
    const x = document.getElementById("ok3")
    x.insertAdjacentText("beforeend", "0");
}
function btnDot () { 
    const x = document.getElementById("ok3")
    x.insertAdjacentText("beforeend", ".");
}
// a random number generator button
function btnRandom () {
    document.getElementById('ok').innerHTML = '';
    document.getElementById('ok2').innerHTML = '';
    document.getElementById('ok3').innerHTML = '';
    const randomNum = Math.floor(Math.random() * 10000000) + 1;
    document.getElementById("ok3").innerHTML = randomNum;
}
// reload page to clear the calculator screen
function clearScreen (){
    location.reload();
}
function multiply (){
    let Convert1 = document.getElementById("ok3").textContent;      // calculator screen is divided in 3 sections (1-3) 3 is the first numb 2 is the symbol and 1 is the last number. We get the first number into a variable.
    let x3 = document.getElementById("ok")
    document.getElementById('ok3').innerHTML = ''; // delete everything from the third section so when we press num buttons we dont add them to the first number of the equation
    x3.insertAdjacentText("beforeend", Convert1);
    document.getElementById("ok2").innerHTML = "*";
}
function divide (){
    let Convert1 = document.getElementById("ok3").textContent;
    let x3 = document.getElementById("ok")
    document.getElementById('ok3').innerHTML = '';
    x3.insertAdjacentText("beforeend", Convert1);
    document.getElementById("ok2").innerHTML = "/";
}
function add (){
    let Convert1 = document.getElementById("ok3").textContent;
    let x3 = document.getElementById("ok")
    document.getElementById('ok3').innerHTML = '';
    x3.insertAdjacentText("beforeend", Convert1);
    document.getElementById("ok2").innerHTML = "+";
}
function subtract (){
    let Convert1 = document.getElementById("ok3").textContent;
    let x3 = document.getElementById("ok")
    document.getElementById('ok3').innerHTML = '';
    x3.insertAdjacentText("beforeend", Convert1);
    document.getElementById("ok2").innerHTML = "-";
}
function equals () { 
    const Convert1 = document.getElementById("ok").textContent;
    const Convert2 = parseFloat(Convert1); // convert strings to float numbers 
    const Convert3 = document.getElementById("ok3").textContent;
    const Convert4 = parseFloat(Convert3); // convert strings to float numbers
    const x2 = document.getElementById("ok2").textContent;
    const clearScreen2 = ''; // clear the screen for the calculated answer
    document.getElementById('ok').innerHTML = clearScreen2;
    document.getElementById('ok2').innerHTML = clearScreen2;
    if (x2.indexOf('*') > -1) { // if function to determine which equation
        const lastNum = Convert2 * Convert4; 
        document.getElementById('ok3').innerHTML = lastNum;
    } else if (x2.indexOf('/') > -1) {
        const lastNum = Convert2 / Convert4; 
        document.getElementById('ok3').innerHTML = lastNum;
    } else if (x2.indexOf('+') > -1) {
        const lastNum = Convert2 + Convert4; 
        document.getElementById('ok3').innerHTML = lastNum;
    } else if (x2.indexOf('-') > -1) {
        const lastNum = Convert2 - Convert4; 
        document.getElementById('ok3').innerHTML = lastNum;
    }
}

