
// function tarea(nombre, apellido){
//   nombreM = nombre.toLowerCase()
//   apellidoM= apellido.toUpperCase()
//   return(`ud se llama ${nombreM} ${apellidoM}`)
// }
// let resultado = tarea('Clau', 'Rguez');
// console.log(resultado);

// let name = prompt('introduce nombre')

// console.log(`el nombre tiene ${name.length} letras`);

/*------------------------------------------------------------------------------------------------------*/
/*
 let name1 = prompt('introduce nombre');
 let contador1=0;
 for(let i = 0; i<name1.length; i++){
   if (name1[i] === 'a' || name1[i] === 'e' || name1[i] === 'i' || name1[i] === 'o' || name1[i] === 'u'){
     contador1++
   }
 }
 console.log( `tu nombre tiene ${contador1} vocales` );



let frase = 'cada estudiante tiene su ritmo, cada estudiante tiene su talento y cada estudiante complementa al estudiante que tiene su lado'
let fraseArray = frase.split(' ')
let contador=0;

for(let i =0; i<=fraseArray.length; i++){
  if(fraseArray[i]==='estudiante'){
    contador++;
  }
}
console.log(`la palabra 'estudiante' se repite ${contador} veces`);

let nuevaFrase = frase.replaceAll('estudiante','koder')
console.log(`la frase actualizada seria: '${nuevaFrase} '`  );
 */

//ejercicio 5
/*
const frase = prompt('introduce frase')
const frase1 = prompt('introduce otra frase')


if(frase.length>frase1.length){
console.log(`el string mas largo es ${frase}`);
} else if (frase.length < frase1.length){
  console.log(`el string mas largo es ${frase1}`);
} else {
  console.log(`son iguales de largas`);
}

Ejercicio 6:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'

let input = prompt('introduce una frase con dos palabras y te devolvere la palabra mas larga')


let inputArray = input.split(' ');

if (inputArray[0].length > inputArray[1].length){
  input = inputArray[0];
} else {
  input = inputArray[1];
}
console.log(input);

*/
let prueba1 = prompt('que palabra')
let cadena = "Esto es una pruebaaa, para ver si pruebaaa está dentro de la cadena.";
// let expresion = /prueba/gi;
let coincidencias = cadena.match(prueba1/g);


console.log(coincidencias);

// var expresion = /prueba/gi;
// var coincidencias = cadena.match(expresion);
// var incluida = cadena.includes("prueba");