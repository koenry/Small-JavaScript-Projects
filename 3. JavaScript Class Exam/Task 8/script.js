/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(first, second) {
    this.firstNumber = first;
    this.secondNumber = second;
}

const numbers = new Calculator(13, 6);

numbers.sum = function () {
    return this.firstNumber + this.secondNumber;
};

numbers.subtraction = function () {
    return this.firstNumber - this.secondNumber;
};

numbers.multiplication = function () {
    return this.firstNumber * this.secondNumber;
};

numbers.division = function () {
    return this.firstNumber / this.secondNumber;
};


console.log(numbers.sum());
console.log(numbers.subtraction());
console.log(numbers.multiplication());
console.log(numbers.division());