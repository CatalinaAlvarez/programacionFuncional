/**
 *
 * 1. Crear un función pura
 * 2. Dar un ejemplo de inmutabilidad
 * 3. Escribir una función que no comparta estados o que no tenga efectos secundarios
 * 4. Aplicar funciones basicas de filtro, mapeo y reduce
 */

//1. Función pura. Función que multiplica dos números
console.log("Respuesta 1");

function myFunction(a,b){
    return a*b;
}
console.log(myFunction(2,7))

//2. Ejemplo de inmutabilidad. Función que recibe a la x. Pero la x no cambia su valor.
console.log("Respuesta 2");

const x = 3;
const tenTimes = x => x*10;
console.log(tenTimes(x));
console.log(x);

//3. Función sin efectos secundarios. Se agrega algo a la frase, pero la frase sigue teniendo su valor original. No se afecta nada fuera de la función. 
console.log("Respuesta 3");

const sentence = "Hola, es un gusto conocerte ";
const modifySentence = (sentence, x) => (sentence.concat(x));
console.log(modifySentence(sentence, "Catalina"));
console.log(sentence);

//4. Filter, map y reduce
console.log("Respuesta 4");

const numbers = [1,2,3,4,5,6,7,8,9,10]

//Filter
const odds = numbers.filter(num=> num%2!=0);
console.log("Los números impares son: ", odds);

//Map
const plusOne = numbers.map(num=> num+1);
console.log("Los números aumentados en uno son: ", plusOne);

//Reduce
const addition = numbers.reduce((total, num)=>total+num);
console.log("La suma de los números son: ", addition);

console.log("La lista original es: ", numbers)