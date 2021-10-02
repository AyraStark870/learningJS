
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const btnMostrar = document.querySelector('.btn-danger')


const formulario = document.querySelector('.formulario')

formulario.addEventListener('submit', recogeDatos)

const arreglo = []

function recogeDatos(e) {
  e.preventDefault()
  let x ={}
  x.nombre = nombre.value
  x.apellido = apellido.value
  formulario.reset()
  arreglo.push(x)
  console.log(arreglo);
  table.dibujarTabla()
}


/*btnMostrar.addEventListener( 'click', () => {
  limpiarHTML()
  arreglo.forEach( x => {
    const parrafo = document.createElement('p')
    parrafo.textContent =`${x.nombre} ${x.apellido}`
    document.querySelector('.show').appendChild(parrafo)
  })
})

function limpiarHTML() {
  while (document.querySelector('.show').firstChild){
    document.querySelector('.show').removeChild(document.querySelector('.show').firstChild)
  }
}
*/

let mentorsArray = [
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
  }, {
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
        signature: "CSS",
        score: 9
      },
      {
        signature: "JS",
        score: 10
      },
      {
        signature: "HTML",
        score: 10
      },
    ]
  }


]

class Table{

  constructor([...arreglo] ){
   this.arreglo = arreglo
  }
  dibujarTabla() {
    const table = document.querySelector('.table')



    while(table.firstChild){
      table.removeChild(table.firstChild)
    }
    this.arreglo.forEach(koder => {

      const row = document.createElement('tr')
      const td = document.createElement('td')
        td.textContent = `${koder.nombre} ${koder.apellido}`
      row.appendChild(td)
    /*  mentor.scores.forEach(x => {
        const { score } = x
        const mitd = document.createElement('td')
        mitd.textContent = score
        row.appendChild(mitd)
      })*/
      const celda = document.createElement('td');
      const btn = document.createElement('button')
      btn.textContent = 'X';
      btn.classList.add('btn', 'btn-primary')
      btn.onclick = e => e.target.parentElement.parentElement.remove()
      // probar luego generando un id y eliminar con un filter por ese id
      celda.appendChild(btn)
      row.appendChild(celda)
      table.appendChild(row)

    })
  }
  encontrarPromediosInd(){

    const otro = this.arreglo.map(x => x.scores)
    return `desarrollar este metodo`

  }
}

const dibujarTabla = () => {
  const table = new Table(arreglo)
  console.log(table.encontrarPromediosInd());
  table.dibujarTabla()
}

//document.querySelector('.print').addEventListener('click', dibujarTabla)


/*<table class="table  text-center ">
  <thead>
    <tr>
      <th scope="col">Nombres</th>
      <th scope="col">HTML</th>
      <th scope="col">CSS</th>
      <th scope="col">JS</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody>

  </tbody>
</table>
  <div class="d-flex font-weight-bold align-center justify-content-center">
   <button class="btn btn-primary   my-5">generar tabla</button>
  </div>
  </div>*/