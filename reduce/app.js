/*
 Práctica:
   - obtener los productos de tipo chips and drink
   - obtener todos los productos < a $50 y obtener >= $50
   - obtener el inventario total en valor de todos los productos
   - obtener el inventario total en valor de los productos tipo chips
   - obtener el inventario total en valor de los productos tipo drink
*/

const products = [
  {
    name: 'Coca lata 355ml',
    description: 'Coca lata 355ml',
    price: 11,
    type: 'drink'
  },
  {
    name: 'Boing Mango 500ml',
    description: 'Boing Mango 500ml',
    price: 10,
    type: 'drink'
  },
  {
    name: 'Boing Mango 1lt',
    description: 'Boing Mango 1lt',
    price: 18,
    type: 'drink'
  },
  {
    name: 'Coca-Cola 3lt No Retornable',
    description: 'Coca-Cola 3lt No Retornable',
    price: 40,
    type: 'drink'
  },
  {
    name: 'Coca-Cola 600ml',
    description: 'Coca-Cola 600ml',
    price: 14,
    type: 'drink'
  },
  {
    name: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
    description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
    price: 27.5,
    type: 'chip'
  },
  {
    name: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
    description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
    price: 25.5,
    type: 'chip'
  },
  {
    name: 'Botanas Chips Papas Jalapeño 100 g',
    description: 'Botanas Chips Papas Jalapeño 100 g',
    price: 29.7,
    type: 'chip'
  },
  {
    name: 'Botana Paketaxo Quexo 215 g',
    description: 'Botana Paketaxo Quexo 215 g',
    price: 52.8,
    type: 'chip'
  },
  {
    name: 'Botana Doritos Incógnita 64 g',
    description: 'Botana Doritos Incógnita 64 g',
    price: 18.15,
    type: 'chip'
  },
  {
    name: 'Botana Fritos Sal y Limón 57 g',
    description: 'Botana Fritos Sal y Limón 57 g',
    price: 15.4,
    type: 'chip'
  },
  {
    name: 'Botana Doritos Nacho 58 g',
    description: 'Botana Doritos Nacho 58 g',
    price: 17.6,
    type: 'chip'
  },
  {
    name: 'Botana Doritos Flamin Hot 62 g',
    description: 'Botana Doritos Flamin Hot 62 g',
    price: 17.6,
    type: 'chip'
  },
  {
    name: 'Botanas Chips Papas Fuego Limón 100 g',
    price: 29.7,
    type: 'chip'
  },
  {
    name: 'Papas Sabritas Original 42 g',
    description: 'Papas Sabritas Original 42 g',
    price: 17.6,
    type: 'chip'
  },
  {
    name: 'Papas Sabritas Adobadas 42 g',
    description: 'Papas Sabritas Adobadas 42 g',
    price: 16.5,
    type: 'chip'
  },
  {
    name: 'Cacahuates Hot Nuts Multintenso 50 g',
    description: 'Cacahuates Hot Nuts Multintenso 50 g',
    price: 11,
    type: 'chip'
  },
  {
    name: 'Botana Fritos Chorizo Chipotle 57 g',
    description: 'Botana Fritos Chorizo Chipotle 57 g',
    price: 15.95,
    type: 'chip'
  },
  {
    name: 'Botana Chips Sal de Mar Bolsa 170 g',
    description: 'Botana Chips Sal de Mar Bolsa 170 g',
    price: 49.5,
    type: 'chip'
  },
  {
    name: 'Botana Cheetos Poffs 100 g',
    description: 'Botana Cheetos Poffs 100 g',
    price: 34.1,
    type: 'chip'
  },
  {
    name: 'Papas Fritas Stax Cheddar 156 g',
    description: 'Papas Fritas Stax Cheddar 156 g',
    price: 47.85,
    type: 'chip'
  },
  {
    name: 'Papas Sabritas Original 240 g',
    description: 'Papas Sabritas Original 240 g',
    price: 75.35,
    type: 'chip'
  },
  {
    name: 'Botana Doritos Nacho 370 g',
    description: 'Botana Doritos Nacho 370 g',
    price: 82.5,
    type: 'chip'
  },
  {
    name: 'Chicharrón de Cerdo Sabritas 115 g',
    description: 'Chicharrón de Cerdo Sabritas 115 g',
    price: 55,
    type: 'chip'
  },
  {
    name: 'Botana Cheetos Torciditos 150 g',
    description: 'Botana Cheetos Torciditos 150 g',
    price: 34.1,
    type: 'chip'
  },
  {
    name: 'Papas Ruffles Queso 290 G',
    description: 'Papas Ruffles Queso 290 G',
    price: 71.5,
    type: 'chip'
  },
  {
    name: 'Dip Tostitos Queso Suave 255 g',
    description: 'Dip Tostitos Queso Suave 255 g',
    price: 69.3,
    type: 'chip'
  }
]



//   - obtener los productos de tipo chips and drink

/*
{
    chip: [
        {}
        {}
    ],
    drink: [
        {}
        {}
        {}
    ]
}
*/

const productsOrdered = arrayProducts => {
  let products = arrayProducts.reduce((accum, product) => {
    const { type } = product
    return !accum[type]
      ? { ...accum, [type]: [product] } // no existe la pripiedad
      : { ...accum, [type]: [...accum[type], product] } // cuando ya existe

  }, {})
  return products
}

console.log(productsOrdered(products))


// - obtener todos los productos < a $50 y obtener >= $50

const getProducts = (isMayor, arrayProducts) => {
  return arrayProducts.filter((product) => isMayor ? product.price >= 50 : product.price < 50)
}

// getProducts(false, products )
// getProducts(true, products )



// - obtener el inventario total en valor de todos los productos

const totalInventaryProducts = products.reduce((accum, product) => accum + product.price, 0)

// console.log(`El invetario total es: $${totalInventaryProducts}`)

// - obtener el inventario total en valor de los productos tipo chips
// - obtener el inventario total en valor de los productos tipo drink

// const totalDrink = products.reduce((accum, product)=>{
//     // debugger
//     return product.type === "drink"
//            ? accum += product.price // acumulado - si si es de tipo drink
//            : accum // si no es de tipo drink - regresa el acumulado
// }, 0)

// console.log(totalDrink)

const getTotalByType = (type, arrayProducts) => {
  return arrayProducts.reduce((accum, product) => {
    // debugger
    return product.type === type
      ? accum += product.price // acumulado - si si es de tipo drink
      : accum // si no es de tipo drink - regresa el acumulado
  }, 0)
}



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

const songsOrdered = arrayBandas => {
  let resultado = arrayBandas.reduce((accum, cancion) => {
    const { band } = cancion
    return !accum[band]//verificar que exista la propiedad en el objeto
      ? { ...accum, [band]: [cancion] } // no existe la pripiedad entonces la creas y le asigans un arreglo q va a tener todo el objeto cancion
      : { ...accum, [band]: [...accum[band], cancion] } // cuando ya existe

  }, {})
  return resultado
}

// console.log(songsOrdered(songsData));




let arrayPersons = [
  {
    name: "Alice", age: 25, voted: true, gender: "mujer"
  },
  {
    name: "Jenifer", age: 26, voted: false, gender: "mujer"
  },
  {
    name: "Bruno", age: 48, voted: false, gender: "hombre"
  },
  {
    name: "Jon", age: 22, voted: true, gender: "hombre"
  },
  {
    name: "Brian", age: 20, voted: false, gender: "hombre"
  },
  {
    name: "Luis", age: 38, voted: true, gender: "hombre"
  },
  {
    name: "David", age: 29, voted: true, gender: "hombre"
  },
  {
    name: "Ximena", age: 40, voted: false, gender: "mujer"
  },
  {
    name: "Paulet", age: 37, voted: false, gender: "mujer"
  },
  {
    name: "Albert", age: 45, voted: true, gender: "hombre"
  },
  {
    name: "Mike", age: 22, voted: false, gender: "hombre"
  },
  {
    name: "Tami", age: 35, voted: true, gender: "hombre"
  },
  {
    name: "Mari", age: 28, voted: true, gender: "mujer"
  },
  {
    name: "Mireya", age: 18, voted: true, gender: "mujer"
  },
  {
    name: "Tamara", age: 18, voted: true, gender: "mujer"
  },
]
/*
Usar reduce para obtener la siguiente informacion
- Un array con aquellas personas que votaron
- la edad promedio de todos los votantes
- un array con aquellos votantes que votaron y que son menores a 30 años
- la edad promedio de los no votantes
- el porcentaje de votantes vs no votante
- el procentaje de mujeres que votaron
- el porcentaje de los hombres que votaron
*/
const ciudadanosComprometidosProcesoElectoral = arreglo => {
  let ciudadanos = arreglo.reduce( (accum, ciudadano ) => {

    let {voted} = ciudadano
    return voted ? [...accum, ciudadano ] : accum
  }, [])
  return ciudadanos
}
console.log(ciudadanosComprometidosProcesoElectoral(arrayPersons));

//la edad promedio de todos los votantes
const edadPromedio = arreglo => {
  let ciudadanos = arreglo.reduce((accum, ciudadano) => {

    let { age } = ciudadano

    return (accum + age)
  }, 0)

  return ciudadanos/arreglo.length
}
console.log(edadPromedio(arrayPersons));

const ciudadanosComprometidosProcesoElectoralJovenes = arreglo => {
  let ciudadanos = arreglo.reduce((accum, ciudadano) => {

    let { voted, age } = ciudadano
    return voted && age < 30 ? [...accum, ciudadano] : accum
  }, [])
  return ciudadanos
}

console.log(ciudadanosComprometidosProcesoElectoralJovenes(arrayPersons));


//- la edad promedio de los no votantes
const edadPromedioNoVotantes = arreglo => {
  let arregloNoVotantes = arreglo.filter( persona => !persona.voted)

  let promedioNoVotantes = arregloNoVotantes.reduce( (accum, persona) =>{
    let {age} = persona
    return (accum + age)
  }, 0)
  return promedioNoVotantes / arregloNoVotantes.length
}

console.log(`edad promedio de los no votantes es ${edadPromedioNoVotantes(arrayPersons)}`);

//- el porcentaje de votantes vs no votante
const porcentaje = arreglo => {

  let porciento = arreglo.reduce((accum, persona) => {

    //651
    let { voted, name } = persona

    return !voted ? { ...accum, noVoto: name } : { ...accum, Voto: name }
  }, {})
  return porciento
}

console.log(`es ${porcentaje(arrayPersons)}`);

// ?{ ...accum, [band]: [cancion] } // no existe la pripiedad entonces la creas y le asigans un arreglo q va a tener todo el objeto cancion
 //: { ...accum, [band]: [...accum[band], cancion] } // cuando ya existe