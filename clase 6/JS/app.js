
  const resultadoDiv = document.querySelector('.resultados')
  const botones = document.querySelectorAll('button')
  for(let i = 0; i< botones.length; i++){//para agregar una clase diferente a c/d boton
    botones[i].classList.add(`btn-${i}`,'m-2')
  }

 const btnDanger = document.querySelector('.btn-danger')
 console.log(btnDanger);
 /*
 btnDanger.addEventListener('click', (e) => {
   console.log(e);
 botones.forEach( boton => {
     boton.disabled = false
   })
 })*/

const mostrarHTML = (someFunction, numerobtn) => {
  const parrafo = document.createElement('p')
  parrafo.textContent = someFunction()
  resultadoDiv.appendChild(parrafo);

  setTimeout(() => {
    parrafo.remove()
  }, 5000);
  document.querySelector(`.btn-${numerobtn}`).disabled = true
}

console.log('***************************')
console.log('EJERCICIO 1');
console.log('***************************')

const larger = () => {
  const myString = prompt('introduce una frase porfa!!')
  let comparison = ''
  myString.split(' ').forEach(word=> {
    if(word.length>comparison.length){
      comparison = word
    }
  });
  return `LA PALABRA MAS LARGA ES : ${comparison} `
}

document.querySelector('.btn-0').addEventListener('click', ()=>{
  mostrarHTML(larger,0 )

})

console.log('***************************')
console.log('EJERCICIO 2');
console.log('***************************')


const detectingDot = () => {
  const phrase = prompt('introduce una frase porfa!!')
  let punto = ''
  if (phrase[phrase.length-1]==='.'){
    punto = 'tu frase termina en punto'
  } else {
    punto = 'tu frase NO termina en punto'
  }
  return punto
}

document.querySelector('.btn-1').addEventListener('click', () => {
  mostrarHTML(detectingDot,1)
})



console.log('***************************')
console.log('EJERCICIO 3');
console.log('***************************')


const coencidences = () =>{
  const phrase = prompt('introduce una frase porfa')
  const word = prompt('introduce palabra a buscar please')
  let contador = 0;
  for (let i = 0; i <= phrase.split(' ').length; i++) {
    if (phrase.split(' ')[i] === word) {
      contador++;
    }
  }
  return ` el numero de veces que se repite la palabra  ' ${word} ' es: ${contador}`
}

document.querySelector('.btn-2').addEventListener('click', () => {
     mostrarHTML(coencidences,2)
})


console.log('***************************')
console.log('EJERCICIO 4');
console.log('***************************')

const extraerSubcadena = () =>{
  const cadena = prompt('ingresar frase')
  const numero1 = prompt('ingresar numero de la primera posicion')
  const numero2 = prompt('ingresar numero de la ultima posicion ')

  return `la subcadena obtenida es ${cadena.slice(numero1, numero2)}`
}

document.querySelector('.btn-3').addEventListener('click', () => {
  mostrarHTML(extraerSubcadena, 3)
})

console.log('***************************')
console.log('EJERCICIO 5');
console.log('***************************')


const compare = () => {
  const word1 = prompt('introduce palabra 1')
  const word2 = prompt('introduce palabra 2')
  result = ' '
  if( word1 === word2){
    result = ' ambas palabras son identicas'
  } else {
    result = ' ambas palabras NO son identicas'
  }
  return result
}
document.querySelector('.btn-4').addEventListener('click', () => {
  mostrarHTML(compare, 4)
})




console.log('***************************')
console.log('EJERCICIO 6');
console.log('***************************')


const insertCharacter = () =>{
  const myString1 = prompt('introduce una frase')
  let character = "'-'"
  let concat = ''
  for (let i = 0; i < myString1.length; i++){
   concat += myString1[i]+character
  }
 return concat
}
document.querySelector('.btn-5').addEventListener('click', () => {
  mostrarHTML(insertCharacter, 5)
})



console.log('***************************')
console.log('EJERCICIO 7');
console.log('***************************')


const verificarParentesis = () => {
  const cadena = prompt('dame una cadena con parentesis \n por esta vez voy a confiar en ti y no pienso validar \n OJO podria hacerlo perfectamente ')
  return `dentro de los parentesis pusiste: ${cadena.slice(cadena.indexOf('(') + 1, cadena.indexOf(')'))}`
}

document.querySelector('.btn-6').addEventListener('click', () => {
  mostrarHTML(verificarParentesis, 6)
})



console.log('***************************')
console.log('EJERCICIO 8');
console.log('***************************')
const drawing = () => {
  let help = '',
     choise = prompt('como quieres la piramide \ normal o reverse?')
  if(choise=== 'normal'){

    for (let i = 1; i < 10; i++) {
         help = i.toString()
         help = help.repeat(i)
      // counter += i*(i)
        console.log(help);

    }
  } else if (choise === 'reverse' ){

    for(let i = 9 ; i > 0; i-- ){
         help = i.toString()
         help = help.repeat(i)
      // counter += i*(i)
        console.log(help);

    }
  }
}
const mensaje = () => {
  return `verificar en consola`
}
document.querySelector('.btn-7').addEventListener('click', () => {
  console.clear()
  drawing()
  mostrarHTML(mensaje, 7)
})


console.log('***************************')
console.log('EJERCICIO 10');
console.log('***************************')

function verificarColeccion(){
  const coleccion = [
    'barba_azul',
    'majarete',
    'licantropo',
    'spiegel',
    'exit'
  ]
  const palabra = prompt('dame otro string porfa!')
  let resultado = ''


    const si = coleccion.some( x => x ===palabra)
    if(!si){
      coleccion.push(palabra)
      resultado = `ya '${palabra}' incluida exitosamente`
    } else {
      resultado = `ya '${palabra}'  estaba incluida `
    }
    return resultado

}
document.querySelector('.btn-8').addEventListener('click', () => {
  mostrarHTML(verificarColeccion, 8)
})



console.log('***************************')
console.log('EJERCICIO 11');
console.log('***************************')

function calcular (){
  const operacion = prompt('elegir operacion')


let coleccionString = []
let numerito = 0
do{
 numerito = prompt("dame numero \n teclea 'end' para terminar...")
 coleccionString.push(numerito)
} while (numerito !== 'end')

coleccionString.pop()
coleccionNun = coleccionString.map( number => parseInt(number))

 let resultado = ' '

if(operacion === 'max'){


    let max = Math.max(...coleccionString)
    resultado = `el mayor numero es ${max}`

} else if (operacion === 'min'){

  let min = Math.min(...coleccionString)
    resultado = `el menor numero es ${min}`

} else if (operacion === 'p y s'){

  let average = 0
  let suma = 0

  for(let i =0 ; i<coleccionNun.length; i++){
   suma += coleccionNun[i]
  }
  average = suma/coleccionNun.length

    resultado = `el promedio es ${average} y la suma es ${suma}`
}
   return resultado
}
document.querySelector('.btn-9').addEventListener('click', () => {
  mostrarHTML(calcular, 9)
})


const funcionRara = () => {
  cadenaNun = prompt('una cadena de numeros separados por algun caracter')


  let exp = /[^A-Za-z0-9]\d*/;
  let resultado = ' '

  for(let i = 0 ; i<cadenaNun.length; i++ ){
    if (exp.test(cadenaNun[i])){
      resultado += '*'
    } else {
      resultado += cadenaNun[i]
    }
  }


  const resultadoFin = resultado.split('*')
  return `la coleccion de numeros es ${resultadoFin}`

}
document.querySelector('.btn-10').addEventListener('click', () => {
  mostrarHTML(funcionRara, 10)
})


const determinarMultiplos = () => {
  const arrayNun = []
  let nun = 0
  let i = 5;
  let resultado = ' '
  do {
    nun = Number(prompt('introducir numero'))
    i--
    if(isNaN(nun)){
     console.log('no sirve');
    } else {
      arrayNun.push(nun)
    }
  } while (i != 0)
 console.log(arrayNun);

 for(let i = 0; i < arrayNun.length; i++){
   if (arrayNun[i] % 2 === 0 ){
    resultado = resultado + `${arrayNun[i]} es multiplo de: 2... \n`
   } else if (arrayNun[i] %3 === 0) {
     resultado = resultado + `${arrayNun[i]} es multiplo de: 3 ... \n`
   } else if (arrayNun[i] % 5 === 0) {
     resultado = resultado + `${arrayNun[i]} es multiplo de: 5... \n`
   } else if (arrayNun[i] % 4 === 0) {
     resultado = resultado + `${arrayNun[i]} es multiplo de: 4 ...\n`
   } else {
     resultado = resultado + `${arrayNun[i]} es un multiplo frustrado ...\n`
   }
}
return resultado
}
document.querySelector('.btn-11').addEventListener('click', () => {
  mostrarHTML(determinarMultiplos, 11)
})



let dataArray = [
  ["Fernanda", "Palacios"],
  ["Alfred", "Altamirano"],
  ["Angel", "Resendiz"],
  ["Elda", "Corona"],
  ["Tux", "Tuxtla"],
  ["Jorge", "De Buen"]
]

let newArrayMentors = []


for(let i = 0; i<dataArray.length; i++){
   newArrayMentors.push({name: dataArray[i][0], lastname: dataArray[i][1]})
}

console.log(newArrayMentors);
/*
arrayMentor = [
    {
        name: "Fernanda",
        lastName: "Palacios"
    },
    {
        name: "Alfred",
        lastName: "Altamirano"
    },
    ...,
    {...}
]
*/


/*


/*
[^A-Za-z0-9]
[a-zA-Z]



let comparison = ''
const larger = phrase => {
  let TransformedPhrase = phrase.split(' ')
  TransformedPhrase.forEach(word => {
    if (word.length > comparison.length) {
      comparison = word
      // console.log(word.length);
    }
  });
*/

// checking(nuevo);





  /*

  for (let i = numero; i > 0; i--) {
    drawing(i)
    // //  help = i.toString().repeat(i)
    //  counter += i*(i)
    console.log(help);
  }*/

// function helpDrawing(){

//   help = x.toString().repeat(x)
// }



// drawingReverse()
/*
let cantidad = Number(prompt('cuantos quieres?'));
console.log(cantidad);
const  koders = []

function myfunction(x){
  for(let i=0; i<x; i++){
    let nombre = prompt('introducir nombre de koder')
    koders.unshift(nombre)
    console.log(`el nombre del koder es ${koders[i]} y la posicion es ${i + 1}`);
  }
}
myfunction(cantidad);

let number = Number(prompt('que numero quieres saber'))
function saberNombre(number){
  console.log(koders[number]);
}
saberNombre(1)

// console.log(koders.reverse());

// const otroKoders = ['amoi','btoi', 'belle', 'dils']

const otroKoders = ['Emilio de Leon', 'Elias Herrera','Armando Rios']

let emi = 'Emilio de Leon'
let prueba = emi.split(' ')
let prueba2 = ' '
let fin = ''
for(let i = 0; i<prueba.length; i++){
  prueba2 = prueba[i].toUpperCase()
  fin += prueba2[0]+'.'
  // prueba += nuevaFrase[i][0].toUpperCase() + nuevaFrase[i].slice(1);
}
console.log(fin);


A partir del ejercicio anterior:
Crear una funcion que permita saber el nombre de algun koder
basado en su numero asignado
- imprimir la lista de koders en orden alfabetico descendiente
- Crear una nueva lista que contenga los nombres de los koders
  con la siguiente estructura
  [
      "koder 1: Emi de Leon (E. D. L.)"
      "koder 2: Elias Herrera (E. H.)"
      "koder 3: Armando Rios (A. R.)"
  ]
- Permitir agregar un koder en alguna posicion deseada,
  por ejemplo: "Fanny Alvarez, lugar 3"


const arrayKoders = [
  'leo di caprio',
  'jon snow',
  'isabel tudor',
  'elias y chio',
  'voltus v',
  'jacques brel'
]

const aleatorio = (array) =>{
  let randomNumber = Math.floor(Math.random() * array.length);
  return randomNumber
}

console.log(aleatorio(arrayKoders));

const imprimir = (someFuction) =>{
  let x = arrayKoders[someFuction]
  return x
}
 console.log(imprimir(aleatorio(arrayKoders)));

 */