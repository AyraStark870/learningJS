

console.log('***************************')
console.log('EJERCICIO 2');
console.log('***************************')
/*
function tablaMultip(){
    let nun =0;
    do {
        nun = Number(prompt('dime numero de 1 al 10'))
    } while (nun > 10 || nun < 0  ||isNaN(nun))
    for(let i = 1; i<=10;i++){
        console.log(`${nun} X ${i} =` + nun * i);
    }
}
tablaMultip();
*/


console.log('***************************')
console.log('EJERCICIO 3');
console.log('***************************')

/*
let nun1 = 0;
do {
    nun1 = Number(prompt('dime numero de 10 al 100'))
} while (nun1 < 10 ||  nun1 >100  || isNaN(nun1))

for(let i = 0; i<=nun1; i++){
    if(i%2===0){
        console.log(i);
    }
}
*/
/*
console.log('***************************')
console.log('EJERCICIO 4');
console.log('***************************')


let nun2 = prompt('introducir numero')
let suma = 0
for(let i = 0; i<nun2.length;i++){
    suma += Number(nun2[i])
}

console.log(suma);
*/
console.log('***************************')
console.log('EJERCICIO 5');
console.log('***************************')
/*
let estrella = prompt('introducir palabra y te dare cientos de estrellas')
let recompensa = ''
for(let i=0; i<estrella.length; i++){
    recompensa+='*';
    console.log(recompensa);
}
*/
console.log('***************************')
console.log('EJERCICIO 6');
console.log('***************************')

/*
let nun3 = 100;
let suma=0
for(let i=1; i<=nun3;i++){

    if(i%3===0 || i%5===0){
        suma+=i
        console.log(i);
    }
}
console.log(suma);
*/
console.log('***************************')
console.log('EJERCICIO 7');
console.log('***************************')
/*

    let frase= prompt('introduce una frase');
    let nuevaFrase = frase.split(' ')
    let prueba=''

    for (let i = 0; i < nuevaFrase.length; i++) {
        if(i!==0){
            prueba += nuevaFrase[i][0].toUpperCase()+nuevaFrase[i].slice(1);
        } else {
            prueba += nuevaFrase[i].toLowerCase();
        }
    }
    console.log(prueba);
*/

console.log('***************************')
console.log('EJERCICIO 8');
console.log('***************************')
/*
Ejercicio 8:
Desarrollar un programa que solicite 10 números e imprima la suma de lo últimos 5 valores ingresados.
*/
let suma=0;
for(let i =1 ; i<=10; i++){
 let nun = Number(prompt('introducir numero'))
 if(i>5){
  suma+=nun
 }
}
console.log(suma);
