/* ------------------------------ TASK 10 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti skaičių, kuris turi būti ne mažiau 1, ir ne daugiau 9 (1-9 imtinai)

Jeigu įvesta neteisinga vertė - atsiranda "error" žinutė ir prašoma įvesti skaičių nuo 1 iki 9.
Error atvaizdavimas bloke - <div class="error">

Jeigu įvesta vertė tiko - nusispalvina to skaičiaus langelis lentelėje. 

Įvedus naują tinkantį skaičių, nusispalvina naujas atitinkamo skaičiaus
 langelis, o senas vėl tampa baltas.

Jeigu norite, galite naudotis turimu CSS, bet galite pasirašyti ir savo. 
-------------------------------------------------------------------------- */

const colours = ['brown', 'yellow', 'green', 'red', 'blue', 'cyan', 'orange', 'purple', 'pink', 'grey', ];
var remove = ['t1'];
const colorMe = (event) => {
if (remove !== null  ) {
    const number = parseInt(document.getElementById("number").value);
    console.log(remove)
    document.getElementById(remove[0]).style.backgroundColor = "white";
        if (number > 0 && number < 10) {
            document.getElementById('error').style.visibility = 'hidden';
            document.getElementById('t'+number).style.backgroundColor = colours[number];
            remove.splice(0, 1, 't'+number);
        } else {
        document.getElementById('error').style.visibility = 'visible';
        }       
}
    event.preventDefault();
    
}