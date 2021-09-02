//var
// se puede reinicializar
//se puede reasignar
//su contexto es de funcion
//global

//let
// NO se puede reinicializar (en un bloque si)
//se puede reasignar
//contexto de bloque

//const
// NO se puede reinicializar
//NO se puede reasignar
//NO es inmutable

// let name = 'clau'

// function probnadoScope(){
//   name = 'verve';
//   console.log(`aca name dentro de la funcion y seria: ${name}`);
// }
// probnadoScope()
// console.log(`aca name fuera de la funcion y seria: ${name}`);
alert('sklgsjlk')
var x = 1;
console.log(x);
if (true) {
  var x = 2;
  console.log(x);
}
console.log(x);