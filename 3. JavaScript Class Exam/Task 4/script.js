/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

/* ------------------------------ TASK 4 ENGLISH -----------------------------------
Write JS code, where all information about the cars will be printed from file "cars.json" (endpoint and file provided).

Each brand should have their own "card", where brand name and models should be printed.

Note: Card about the brand and models, must have minimum style.
-------------------------------------------------------------------------- */
const ENDPOINT = "https://raw.githubusercontent.com/aistonija/VIGI-7-exam/main/Task%204/cars.json";
fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
        let output = "<div></div>";
        data.forEach((auto) => {
        output += `<h2><b>${auto.brand}</h2></p> <p>${auto.models}</p> `;
        });
        document.getElementById("output").innerHTML = output;
    });
    

