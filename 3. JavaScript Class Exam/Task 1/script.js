/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijas (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const main = (event) => {
    const weight = parseInt(document.getElementById("search").value);
    if ((Number.isInteger(weight)) === false ) {
        alert ("Please enter a number!")
    }
    let lbs = (weight * 2.2046).toFixed(2) + ' lbs';
    let g = (weight / 0.0010000).toFixed(2) + ' g';
    let oz = (weight * 35.274).toFixed(2) + ' oz';
    document.getElementById("lbs").innerHTML = lbs;
    document.getElementById("g").innerHTML = g;
    document.getElementById("oz").innerHTML = oz;
    event.preventDefault();
}

