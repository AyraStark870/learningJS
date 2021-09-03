
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
console.log(`la palabra 'estudiante' se repita ${contador} veces`);
let nuevaFrase = frase.replaceAll('estudiante','koder')
console.log(`la frase actualizada seria: '${nuevaFrase} '`  );
