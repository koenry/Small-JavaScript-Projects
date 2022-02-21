let x = "X";
let o = "O";
let player1 = "Player 1 ";
let player2 = "Player 2 ";
const myobj = document.getElementById("flex");
const myobj2 = document.getElementById("player");
function game (clicked_id) {
    let idd = clicked_id;
    document.getElementById("player").innerHTML = player2 + "Turn";
    [player1, player2] = [player2, player1]; // Change to whichever players turn is
    document.getElementById(idd).innerHTML = x; 
    [x, o] = [o, x]; // Change X to O and vice versa after each turn

    // List of all possible squares to move on
    const squareArray =
    [ document.getElementById("grid1").textContent, 
    document.getElementById("grid2").textContent, 
    document.getElementById("grid3").textContent,
    document.getElementById("grid4").textContent, 
    document.getElementById("grid5").textContent, 
    document.getElementById("grid6").textContent,
    document.getElementById("grid7").textContent, 
    document.getElementById("grid8").textContent, 
    document.getElementById("grid9").textContent 
    ]
    // All possible win outcomes
    const winCond1 = 
    [ squareArray[0] + squareArray[1] + squareArray[2], // 1st hori line
    squareArray[3] + squareArray[4] + squareArray[5],  // 2nd hori line
    squareArray[6] + squareArray[7] + squareArray[8], // 3rd hori line
    squareArray[0] + squareArray[3] + squareArray[6], // 1st verti line
    squareArray[1] + squareArray[4] + squareArray[7], // 2nd verti line
    squareArray[2] + squareArray[5] + squareArray[8], // 3rd verti line
    squareArray[0] + squareArray[4] + squareArray[8], // 1st diag line
    squareArray[2] + squareArray[4] + squareArray[6]]; // 2nd diag line
    if (winCond1[0] === "XXX" ||
        winCond1[0] === "OOO" ||
        winCond1[1] === "XXX" ||
        winCond1[1] === "OOO" ||
        winCond1[2] === "XXX" ||
        winCond1[2] === "OOO" ||
        winCond1[3] === "XXX" ||
        winCond1[3] === "OOO" ||
        winCond1[4] === "XXX" ||
        winCond1[4] === "OOO" ||
        winCond1[5] === "XXX" ||
        winCond1[5] === "OOO" ||
        winCond1[6] === "XXX" ||
        winCond1[6] === "OOO" ||
        winCond1[7] === "XXX" ||
        winCond1[7] === "OOO" ||
        winCond1[8] === "XXX" ||
        winCond1[8] === "OOO"){
        myobj.remove(); myobj2.remove();
        document.getElementById("player2").innerHTML = player2 + "WINS!";
        const resetButton1 = document.createElement("button");
        const resetButton2 = document.createTextNode("Reset");
        resetButton1.appendChild(resetButton2);
        document.body.appendChild(resetButton1);
        resetButton1.onclick = function(){
            location.reload();
        };
    }
}


