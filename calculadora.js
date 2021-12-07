//Calculadora usando sumas y restas

//FUNCIONES PURAS

//Suma.
const suma = (a,b) => a+b;

//Resta.
const resta = (a,b) => a-b;

//FUNCIONES DE COMPOSICIÓN

//Multiplicación sólo números positivos
const multiplicacion = (a, b) => {
	return [...Array(b)].reduce((acc) => suma(acc, a), 0);
};

//Multiplicación para números positivos y negativos.
const multiplicacion2 = (a, b) => {
	return b >= 0 ? [...Array(b)].reduce((acc) => suma(acc, a), 0) : [...Array(a)].reduce((acc) => suma(acc, b), 0);
};

//División sin mandar error por divisiones con 0 y sólo números positivos. Se usa recursividad
const division = (a, b) => {
	return b === 0 ? 0 : resta(a, b) === 0 ? 1 : a < b ? 0 : suma(division(resta(a, b), b), 1);
};

//División validando los casos con 0 y permitiendo dividendo negativo
const division2 = (a, b) => {
	return b == 0 || a == 0 ? 'No se puede dividir entre cero' : b > 1 ? [...Array(a).keys()].reduce((acc, num) => multiplicacion(num, b) <= a ? suma(acc, 1) : acc, -1) : a;
}

console.log("Suma: ", suma(7,2));
console.log("Resta: ", resta(7,2));
console.log("Multiplicación: ",multiplicacion(7,2));
console.log("Multiplicación 2: ",multiplicacion2(7,2));
console.log("División: ",division(7,2));
console.log("División 2: ",division(7,2));


