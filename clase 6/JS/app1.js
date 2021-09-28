

 let mentorsArray = [
     {
         name: "Angel Resendiz",
         scores: [
             {
                 signature:  "HTML",
                 score: 10             },
             {
                 signature:  "CSS",
                 score: 10
             },
             {
                 signature:  "JS",
                 score: 9
             },
         ]
     },
     {
         name: "Elda Corona",
         scores: [
             {
                 signature:  "HTML",
                 score: 10
             },
             {
                 signature:  "CSS",
                 score: 9
             },
             {
                 signature:  "JS",
                  score: 10
             },
         ]
     },
     {
         name: "Alfred Altamirando",
         scores: [
             {
                 signature:  "HTML",
                 score: 9
             },
             {
                 signature:  "CSS",
                 score: 10
             },
             {
                 signature:  "JS",
                 score: 10
             },
         ]
     },     {
         name: "Tux Tuxtla",
         scores: [
             {
                 signature:  "HTML",
                  score: 10
             },
             {
                 signature:  "CSS",
                 score: 8
             },
             {
                 signature:  "JS",
                 score: 10
             },
         ]
     },
     {
         name: "Fernanda Palacios",
         scores: [
             {
                 signature:  "CSS",
                 score: 9
             },
             {
                 signature:  "JS",
                 score: 10
             },
             {
                 signature:  "HTML",
                 score: 10
             },
         ]
     }
 ]
const promedios = (something) =>{
  let puntosHTML =0
  let puntosCSS =0
  let puntosJS =0

  something.forEach( somethingcito => {
    puntosHTML += somethingcito.scores[0].score;
    puntosCSS += somethingcito.scores[1].score;
    puntosJS += somethingcito.scores[2].score;
  })

  return `el promedio de la materias HTML, CSS y JS es ${puntosHTML}, ${puntosCSS} y ${puntosJS} puntos respectivamente`;
}

//  console.log(promedios(mentorArray));

let arrayScores = []
let resultado = 0
let resultadoFinal = ''
const promedioIndividual = (myarray) => {
    myarray.forEach( x => {

      arrayScores.push(x.scores)

    })
    for (let i =0; i < arrayScores.length; i++ ){
      resultado = 0
      arrayScores[i].forEach(y=>{
       resultado += y.score;
      })
      resultadoFinal += `el promedio de ${myarray[i].name} es ${(resultado / 3).toFixed(2) } \n`
    }

    return resultadoFinal
}

 console.log();


/*
- Obtener el score promedio de cada materia (HTML, CSS, JS)
- Obtener el promedio indivual de cada mentor
- Crear un array de string con la siguiente forma:
  "Mi nombre es {name} y mi promedio es {promedio}"
- Obtener la lista de mentores cuyo promedio sea mayor a 9.5
``
*/

const dibujarTabla =() => {
  const table = document.createElement('table')
  table.classList.add('table')

   mentorsArray.forEach( mentor => {
     const row = document.createElement('tr')
     row.textContent = mentor.name
     row.classList.add('table')
     table.appendChild(row)
     mentor.scores.forEach( score => {
       const mitd = document.createElement('td')

       mitd.textContent =  score.score
       row.appendChild(mitd)
     })
   })
   document.querySelector('.container').appendChild(table)
}
dibujarTabla()

const miParrafo = document.createElement('p')
miParrafo.textContent = promedioIndividual(mentorsArray)

document.querySelector('.container').appendChild(miParrafo)
