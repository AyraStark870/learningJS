console.log('***************************')
console.log('EJERCICIO 1');
console.log('***************************')

let word = prompt('introducir una palabra');

function reverseWord(x){
  let newWord = '';

  for (let i = (x.length-1); i>= 0; i--){
    newWord += x[i]
  }
  return newWord
}
console.log(reverseWord(word));

console.log('***************************')
console.log('EJERCICIO 2');
console.log('***************************')

function transform(x){
  let newPhrase = '';
  for (let i =0; i < x.length; i++){
   if(i%2 ===0){
   newPhrase += x[i].toUpperCase();
   } else {
     newPhrase += x[i]
   }
  }
  return newPhrase
}
console.log( transform(word))

console.log('***************************')
console.log('EJERCICIO  3');
console.log('***************************')



function checar(cadena){
  if (/\d/ig.test(cadena[0])){
    return `el primer caracter es un numerito`;
  } else if (/[a-z]/ig.test(cadena[0]) & /[^aeiou]/i.test(cadena[0])) {
    return `el primer caracter es consonante`;
  } else if (/[aeiou]/ig.test(cadena[0])) {
    return `el primer caracter es vocal`;
  } else {
    return `el primer caracter es 'especial'`;
  }
}
console.log(checar(word));