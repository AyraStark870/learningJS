

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
    table.appendChild(row)
    mentor.scores.forEach(score => {
      const mitd = document.createElement('td')

      mitd.textContent = score.score
      row.appendChild(mitd)
    })
    const celda = document.createElement('td');
    const btn = document.createElement('button')
    btn.textContent ='X';
    btn.classList.add('btn', 'btn-primary', 'font-weight-bold' )
    btn.onclick = (e) => {
      e.target.parentElement.parentElement.remove()
    }
    celda.appendChild(btn)
    row.appendChild(celda)

  })
  document.querySelector('.container').appendChild(table)
}
dibujarTabla()

