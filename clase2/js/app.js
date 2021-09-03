//  let numero1=parseInt(prompt('dame numero'))
//  let numero2=parseInt(prompt('dame numero'))

// console.log('la suma es '+ (numero1 +numero2));
// console.log('la resta es '+ (numero1-numero2));
// console.log('la multiplicacion  es ' + numero1*numero2);
// console.log('la division es ' +numero1/numero2);
// console.log('el modulo es '+ numero1%numero2);


// // let numero1=parseInt(prompt('dame numero'))
// // let numero2=parseInt(prompt('dame numero'))
//  if(numero1>numero2){
//   console.log('el primero es mayor');
// } else {
//    console.log('el segundo es mayor');
// }

// let letra1 = prompt('dame letra1')
// let letra2 = prompt('dame letra2')

// console.log(letra1>letra2);

let peso;
let nombre = prompt('ingresar su nombre');
do{
    peso = prompt('ingresar su peso en kg, solamente valores numericos');
} while (isNaN(peso))
let planeta = prompt('¿desea viajar a Jupiter, Marte o la Luna? solo una de las tres opciones porfa')

if(planeta==='jupiter'){
   peso = Number(peso) *2.53;
} else if (planeta ==='luna'){
   peso = Number(peso) * 0.16;
} else if (planeta === 'marte') {
   peso = Number(peso) * 3.71;
}
else {
  planeta='bobolandia'.toUpperCase()
  peso= 1000000;
  nombre='payaso'
}
console.log(`${nombre} en ${planeta} su peso seria ${peso}kg` );