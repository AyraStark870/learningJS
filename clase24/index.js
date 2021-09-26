

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

const dibujarTabla = () => {
  const table = document.querySelector('.table')

  mentorsArray.forEach(mentor => {
    const row = document.createElement('tr')
    const th = document.createElement('th')
    th.textContent = mentor.name
    row.appendChild(th)
    mentor.scores.forEach(x => {
      const {score} = x
      const mitd = document.createElement('td')
      mitd.textContent = score
      row.appendChild(mitd)
    })
    const celda = document.createElement('td');
    const btn = document.createElement('button')
    btn.textContent ='X';
    btn.classList.add('btn', 'btn-primary')
    btn.onclick = e => e.target.parentElement.parentElement.remove()
    // probar luego generando un id y eliminar con un filter por ese id
    celda.appendChild(btn)
    row.appendChild(celda)
    table.appendChild(row)

  })

}
dibujarTabla()

