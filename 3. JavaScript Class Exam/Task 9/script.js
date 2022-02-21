/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite ojektų konstruktorių "Movie" (naudokte ES6), kuris sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */
function movie(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  const gotg = new movie("GoTG", "Gunn", "232000000");
  gotg.wasExpensive = function () {
    return Boolean(parseInt(this.budget) > 100000000) 
  };
  console.log(gotg.wasExpensive());







