/*
Ejercicio:
*/



const songsData = [
  {
    name: "¿Dónde jugarán los niños?",
    band: "Maná",
    releaseYear: "1992",
    statistics: {
      likes: 20000,
      reproductions: 8000
    },
  },
  {
    name: "La muralla verde",
    band: "Enanitos Verdes",
    releaseYear: "1986",
    statistics: {
      likes: 21000,
      reproductions: 19000
    },
  },
  {
    name: "Te Ví En Un Tren",
    band: "Enanitos Verdes",
    releaseYear: "1987",
    statistics: {
      likes: 20000,
      reproductions: 23490
    },
  },
  {
    name: "Mariposa Traicionera",
    band: "Maná",
    releaseYear: "2002",
    statistics: {
      likes: 12000,
      reproductions: 25690
    },
  },
  {
    name: "Rayando el Sol",
    band: "Maná",
    releaseYear: "1990",
    statistics: {
      likes: 12000,
      reproductions: 18000
    },
  },
  {
    name: "La celula que explota",
    band: "Jaguares",
    releaseYear: "1999",
    statistics: {
      likes: 12000,
      reproductions: 23421
    },
  },
  {
    name: "No dejes que...",
    band: "Jaguares",
    releaseYear: "1999",
    statistics: {
      likes: 12345,
      reproductions: 10000
    },
  }
]

//  - Agrupar el nombre de la bandas, que no esten repetidas
const nombresBandasSinRepetir = musicData => eliminarItemRepetido(conseguirArregloBandas(musicData))


const conseguirArregloBandas = unArreglo => {
  const nombresBandasArray = []
  unArreglo.forEach(data => nombresBandasArray.push(data.band))
  return nombresBandasArray
}
const eliminarItemRepetido = arreglo => arreglo.filter((elemento, i) => arreglo.indexOf(elemento) === i)
// console.log(nombresBandas(songsData));

// indexOf() retorna el 1er índice en el que esta un elemento dado en el array, entonces cuando preguntas en que posición
// se encuentra un elemnto y no corresponde con el indice significa que es repetido.
/*
console.log(songsData);
*/
console.log(nombresBandasSinRepetir(songsData));



/*- Agrupar las canciones por banda*/
const agruparCancionesPorBandas = arreglo => {
  const arregloBandasNoRepetidas = nombresBandasSinRepetir(arreglo)
  let nuevoArreglo = []
  arregloBandasNoRepetidas.forEach((banda,i)  =>{
    nuevoArreglo[i] =  arreglo.filter( item => item.band===banda)


  })
  let arregloCancionesXBanda = []
  nuevoArreglo.forEach((elemento, indice) => {
    arregloCancionesXBanda[indice] = []
     elemento.forEach( (x,i) => {
      // console.log(x.band);
       arregloCancionesXBanda[indice].push(x.name );

      // arregloCancionesXBandaObjeto = arregloCancionesXBanda.map(elemento => ` las canciones de ${} son ${elemento}` )

    })
    }
  )
   return arregloCancionesXBanda

}

console.log(agruparCancionesPorBandas(songsData));



/*- La cancion con más reproducciones o likes*/

const cancionMasDeLoQueSea = (arreglo, criterio) =>{

  const likesOrReproductions = []


    arreglo.forEach( elemento => {
      if (criterio === 'likes'){

        likesOrReproductions.push([elemento.statistics.likes, elemento.name])
      } else if (criterio === 'reproducciones'){
        likesOrReproductions.push([elemento.statistics.reproductions, elemento.name])
      }
    })


  let maximo = 0
  for (let i = 0; i < likesOrReproductions.length;i++){
    if (likesOrReproductions[i][0]>maximo){
      maximo = likesOrReproductions[i][0]
     }
  }

  const final = likesOrReproductions.filter( item => item[0] === maximo)
  const cancion = final[0][1]

  return `la cancion con mas ${criterio} es ${cancion} con un total de ${maximo} `
}

console.log(cancionMasDeLoQueSea (songsData, 'likes'));

