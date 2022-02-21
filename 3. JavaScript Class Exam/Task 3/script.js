/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
const showAll = () => {
    const ENDPOINT = "https://api.github.com/users";
    fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      let output = "<div></div>";
      data.forEach((user) => {
        output += `<p>${user.login}</p>"<img src=${user.avatar_url}'</img>" `;
      });
      document.getElementById("output").innerHTML = output;
    });
    document.getElementById("message").textContent = ' ';
}

