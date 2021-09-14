
const resultadoDiv = document.querySelector('.resultados')
const botones = document.querySelectorAll('button')
for (let i = 0; i < botones.length; i++) {//para agregar una clase diferente a c/d boton
  botones[i].classList.add(`btn-${i}`, 'm-2')
}

const btnDanger = document.querySelector('.btn-danger')
console.log(btnDanger);


btnDanger.addEventListener('click', (e) => {
  console.log(e);
botones.forEach( boton => {
    boton.disabled = false
  })
})

const mostrarHTML = (someFunction, numerobtn) => {
  const parrafo = document.createElement('p')
  parrafo.textContent = someFunction()
  resultadoDiv.appendChild(parrafo);

  setTimeout(() => {
    parrafo.remove()
  }, 5000);
  document.querySelector(`.btn-${numerobtn}`).disabled = true
}


let mentorArray = [
  {
    name: "Angel Resendiz",
    scores: [
      {
        signature: "HTML",
        score: 10
      },
      {
        signature: "CSS",
        score: 10
      },
      {
        signature: "JS",
        score: 9
      },
    ]
  },
  {
    name: "Elda Corona",
    scores: [
      {
        signature: "HTML",
        score: 10
      },
      {
        signature: "CSS",
        score: 9
      },
      {
        signature: "JS",
        score: 10
      },
    ]
  },
  {
    name: "Alfred Altamirando",
    scores: [
      {
        signature: "HTML",
        score: 9
      },
      {
        signature: "CSS",
        score: 10
      },
      {
        signature: "JS",
        score: 10
      },
    ]
  },
  {
    name: "Tux Tuxtla",
    scores: [
      {
        signature: "HTML",
        score: 10
      },
      {
        signature: "CSS",
        score: 8
      },
      {
        signature: "JS",
        score: 10
      },
    ]
  },
  {
    name: "Fernanda Palacios",
    scores: [
      {
        signature: "HTML",
        score: 10
      },
      {
        signature: "CSS",
        score: 10
      },
      {
        signature: "JS",
        score: 10
      },
    ]
  },
  {
    name: "Severus Snape",
    scores: [
      {
        signature: "HTML",
        score: 1
      },
      {
        signature: "CSS",
        score: 3
      },
      {
        signature: "JS",
        score: 2
      },
    ]
  }
]


const helper = someArray => {
  const arregloIntermedio = []
  someArray.forEach(element => {
    arregloIntermedio.push(element.scores)
  });
  return arregloIntermedio
}




const obtenerAltoScore = ( ) => {

  let resultado
  let myreturn = ''

  const arregloIntermedio = helper(mentorArray)

  arregloIntermedio.forEach((x, index) => {
    resultado = 0
    x.forEach(final => {
      resultado += final.score

    })
    if (resultado / arregloIntermedio[index].length > 9.5) {
      myreturn += `${mentorArray[index].name}, `;

    }
  })
  myreturn = myreturn.slice(0, -2) + ` tienen scores por encima de 9.5 puntos!!`
  return myreturn
}


document.querySelector('.btn-0').addEventListener('click', () => {
  mostrarHTML(obtenerAltoScore,0)
})

const obtenerTodoScore = () => {

  let resultado = 0
  let myreturn = ''

  const arregloIntermedio = helper(mentorArray)

  arregloIntermedio.forEach((x, index) => {
    resultado = 0
    x.forEach(final => {
      resultado += final.score
    })

    myreturn += `${mentorArray[index].name} tiene un score de ${(resultado / arregloIntermedio[index].length).toFixed(2)}, `;


  })
  myreturn = myreturn.slice(0, -2) + ` :(!!!`
  return myreturn
}

document.querySelector('.btn-1').addEventListener('click', () => {
  mostrarHTML(obtenerTodoScore, 1)
})




const promedios = () => {
  let puntosHTML = 0
  let puntosCSS = 0
  let puntosJS = 0

    mentorArray.forEach(somethingcito => {
    puntosHTML += somethingcito.scores[0].score;
    puntosCSS += somethingcito.scores[1].score;
    puntosJS += somethingcito.scores[2].score;
  })

  return `el promedio de la materias HTML, CSS y JS es ${puntosHTML}, ${puntosCSS} y ${puntosJS} puntos respectivamente`;
}
document.querySelector('.btn-2').addEventListener('click', () => {
  mostrarHTML(promedios, 2)
})

console.log(promedios(mentorArray));