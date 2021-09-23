const kodersCollection = [
  {
    name: 'Javier',
    lastName: 'López',
    birthday: '1996/06/24',
    generation: 9,
    bootcamp: 'JavaScript',
    scores: [
      {
        module: 'Frontend',
        score: 90
      },
      {
        module: 'Backend',
        score: 80
      },
      {
        module: 'Cloud',
        score: 80
      },
    ]
  },
  {
    name: 'Ale',
    lastName: 'Paez',
    birthday: '1998/05/12',
    generation: 1,
    bootcamp: 'Python',
    scores: [
      {
        module: 'Frontend',
        score: 90
      },
      {
        module: 'Backend',
        score: 100
      },
      {
        module: 'Cloud',
        score: 100
      },
    ]
  },
  {
    name: 'Juan Pablo',
    lastName: 'Sánchez',
    birthday: '1994/10/26',
    generation: 10,
    bootcamp: 'JavaScript',
    scores: [
      {
        module: 'Frontend',
        score: 100
      },
      {
        module: 'Backend',
        score: 95
      },
      {
        module: 'Cloud',
        score: 80
      },
    ]
  },
  {
    name: 'Oscar',
    lastName: 'Ruiz',
    birthday: '1996/06/24',
    generation: 1,
    bootcamp: 'Python',
    scores: [
      {
        module: 'Frontend',
        score: 98
      },
      {
        module: 'Backend',
        score: 100
      },
      {
        module: 'Cloud',
        score: 70
      },
    ]
  },
  {
    name: 'Mauro',
    lastName: 'López',
    birthday: '1996/06/24',
    generation: 9,
    bootcamp: 'JavaScript',
    scores: [
      {
        module: 'Frontend',
        score: 80
      },
      {
        module: 'Backend',
        score: 90
      },
      {
        module: 'Cloud',
        score: 100
      },
    ]
  }
]
/*
Ejercicio en clase:
Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. Agregando además las siguientes funciones:
- Prototipo de tipo koder
Obtener la edad a partir de la fecha de nacimiento
Obtener promedio de sus scores
Colección de Koder que pertenezcan a JavaScript
Colección de Koder que pertenezcan a Python


5343 8102 0379 0644 jorge ramirez

4815-1630-5231-4252
628


*/
function Koders (name, lastName, birthday, generation, bootcamp, scores){
   this.name = name;
   this.lastName = lastName;
   this.birthday = birthday;
   this.generation = generation;
   this,bootcamp = bootcamp
   this.scores = scores

}

Koders.prototype.findAge = function () {
  let añoActual = new Date().getFullYear()
  let añoNAc = this.birthday.slice(0,4)
  return añoActual-añoNAc
};
Koders.prototype.scoresAverages = function () {
  let average = this.scores.reduce((accum, score1)  => {
     let {score} = score1
     return accum + score
  },0 )
  return average/this.scores.length
};
Koders.prototype.JS = function(){
  let js = this.scores.filter( s)
}


let clau = new Koders('clau', 'rguez', '1987/09/28', 13, 'JavaScript', [
  {
    module: 'Frontend',
    score: 80
  },
  {
    module: 'Backend',
    score: 90
  },
  {
    module: 'Cloud',
    score: 100
  },
])
console.log(clau.findAge());
console.log(clau.scoresAverages());