
let productsArray = []
const inputs = document.querySelectorAll(".myinput")

const textArea = document.querySelector('.tonio')
const btnI = document.querySelector('#bntSubmit')

const nameInput = document.querySelector('#name')
const priceInput = document.querySelector('#price')
const descInput = document.querySelector('#desc')
const imageInput = document.querySelector('#image')

let editar = false

let productoObjt = {
    desc: " ",
   image: " ",
   name: " ",
   price: " ",
   sizeLarge: " ",
   sizeMedium: " ",
   sizeShort: " "
}
let url = 'https://tarea-bootcamp-default-rtdb.firebaseio.com/products.json'

const createProduct = (producto) => {
  const xhr = new XMLHttpRequest()
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText)
        getProducts()
      }
    }
  })
  xhr.open("POST", "https://tarea-bootcamp-default-rtdb.firebaseio.com/products.json", true)
  xhr.send(JSON.stringify(producto))
}



 btnI.addEventListener('click', ingresarProducto)

function ingresarProducto(e){
   e.preventDefault()
  inputs.forEach((input) => {
    productoObjt[input.name] = input.value
   })

  if(!editar){


    createProduct(productoObjt)
  } else {
    updatingProduct(productoObjt)
    editar = false
  }
   document.querySelector('#formularioProducts').reset()
 }

const getProducts = () => {
  productsArray = []
  const xhr = new XMLHttpRequest()
  // Agregando el listener para ver el estado de mi peticion
  xhr.addEventListener('readystatechange', () => {

    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status <= 299) {

        let responseAjax = xhr.responseText

        let responseParsed = JSON.parse(responseAjax)

      //

        for (const prop in responseParsed) {
          productsArray.push({ id: prop, name: responseParsed[prop].name, desc: responseParsed[prop].desc, image: responseParsed[prop].image, price: responseParsed[prop].price})
          console.log(productsArray);
        }

        printTable(productsArray)
      } else {
        console.log("Ocurrio un error: ", xhr.status, "Not Found")
      }
    }
  })
  // instruccion que me me permite abrir la peticion
  xhr.open("GET", url, true)
  xhr.send()
}


getProducts()

const deleteProduct = (productId) => {

  const xhr = new XMLHttpRequest()
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText)
        getProducts()
      }
    }
  })
  xhr.open("DELETE", `https://tarea-bootcamp-default-rtdb.firebaseio.com/products/${productId}.json`, true)
  xhr.send(null)

}

const updatingProduct = (prod) => {
  const {id} = prod
  const xhr = new XMLHttpRequest()
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText)
        getProducts()
      }
    }
  })
  xhr.open("PUT", `https://tarea-bootcamp-default-rtdb.firebaseio.com/products/${id}.json`, true)
  xhr.send(JSON.stringify(prod))

}
function updateProduct(prod){
  //para regresar alos input los valores a editar
  const { name, price, desc, image, id, sizeLarge } = prod;
  nameInput.value = name
  priceInput.value = price
  imageInput.value = image
  descInput.value = desc

  //lleno el objeto con los valores a editar
  /*productoObjt.name = nameInput
  productoObjt.price = price
  productoObjt.desc = desc
  productoObjt.image = image*/
 productoObjt.id = id

  editar = true
}

function printTable(arreglo){
  const table = document.querySelector('.table tbody')

  while(table.firstChild){
    table.removeChild(table.firstChild)
  }


  arreglo.forEach( (producto, i) => {
    const {name, price, desc, image,id, sizeLarge } = producto

    const row = document.createElement('tr')
    const td = document.createElement('td')
    td.textContent=name
    const tdi = document.createElement('td')
    tdi.textContent=i

    const tdimg = document.createElement('td')
    const imgreal = document.createElement('img')

    imgreal.src = `${image}`
    imgreal.classList.add('img-fluid')
    imgreal.setAttribute('width',50)
    tdimg.appendChild(imgreal)
    console.log(imgreal);

    const tdprice = document.createElement('td')
    tdprice.textContent = `$${price}`

    const tdsizes = document.createElement('td')
    tdsizes.textContent= sizeLarge

    const btnBorrar = document.createElement('button')
    btnBorrar.classList.add('btn','btn-danger')
  //  btnBorrar.textContent = 'X'
    btnBorrar.onclick = () => deleteProduct(id)
    const myi = document.createElement('i')
    myi.classList.add('fas','fa-trash-alt')
    btnBorrar.appendChild(myi)

    const btnEditar = document.createElement('button')
    btnEditar.classList.add('btn','btn-primary')
    btnEditar.onclick = () => updateProduct(producto)
    const myidos = document.createElement('i')
    myidos.classList.add('fas', 'fa-pencil-alt')
    btnEditar.appendChild(myidos)

    row.appendChild(tdimg)
    row.appendChild(tdi)
    row.appendChild(td)
    row.appendChild(tdprice)
    row.appendChild(tdsizes)
    row.appendChild(btnEditar)
    row.appendChild(btnBorrar)
    table.appendChild(row)
  })
}

/*

const createProducts = (producto) => {
  let url = 'https://tarea-bootcamp-default-rtdb.firebaseio.com/.json'
  const xhr = new XMLHttpRequest()
  // Agregando el listener para ver el estado de mi peticion
  xhr.addEventListener('readystatechange', () => {

    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status <= 299) {

        let responseAjax = xhr.responseText

        let responseParsed = JSON.parse(responseAjax)

        productsArray = []
        for (const prop in responseParsed) {
         // kodersArray.push({ id: prop, name: responseParsed[prop].name, lastName: responseParsed[prop].lastName })
            console.log(responsParsed[prop]);
        }

      } else {
        console.log("Ocurrio un error: ", xhr.status, "Not Found")
      }
    }
  })
  // instruccion que me me permite abrir la peticion
  xhr.open("POST", url, true)
  xhr.send()
}

*/



/*
const deleteKoder = (koderId) => {
  const xhr = new XMLHttpRequest()
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText)
      }
    }
  })
  xhr.open("DELETE", `https://api-13va-default-rtdb.firebaseio.com/${koderId}/.json`, true)
  xhr.send(null)

}

document.getElementById("btn-agregar").addEventListener("click", (event) => {
  event.preventDefault()
  let newKoder = {}
  document.querySelectorAll("form#added-koders input").forEach((input) => {
    //   console.log(input.name, input.value)
    newKoder[input.name] = input.value
    //   console.log(newKoder)
  })
  if (newKoder.name === '' || newKoder === '') {
    mensajito('CAMPOS OBLIGATORIOS!!!!!!!!!!!!!', 'error')
  } else {

    createKoder(newKoder)
    document.querySelector('#added-koders').reset()
    mensajito('koder añadido!!!!!')
  }
  getKoders()
})

function mensajito(x, tipo) {
  const parrafo = document.createElement('p')
  parrafo.textContent = x
  if (tipo) {

    parrafo.classList.add('text-white', 'bg-warning', 'text-center')
  } else {
    parrafo.classList.add('text-white', 'bg-success', 'text-center')
  }
  document.querySelector('.mensaje').appendChild(parrafo)
  setTimeout(() => {
    parrafo.remove()
  }, 2000);
}


const createNode = (typeElement, text) => {
  let node = document.createElement(typeElement)
  node.textContent = text
  // let textNode = document.createTextNode(text)
  // node.appendChild(textNode)
  return node
}

function removeKoder(id) {

  mensajito("Eliminando........... jeje")

  deleteKoder(id)

  //window.location.reload();
  //getKoders()
  kodersArray = kodersArray.filter(koder => koder.id !== id)
  //console.log(id);
  printTable()
  console.log(kodersArray);

  console.log('kldhlhlafh');
}

//const printTable = (arrayObject,arrayId) => {
const printTable = () => {
  let tBody = document.getElementById("list-koders")

  while (tBody.lastElementChild) {
    tBody.removeChild(tBody.lastElementChild)
  }
  //arrayObject.forEach((koder, index) => {
  kodersArray.forEach((koder, index) => {
    let { name, lastName, id } = koder
    let tr = document.createElement("tr")
    let tdIndex = createNode("td", index + 1)
    let tdName = createNode("td", name)
    let tdLastName = createNode("td", lastName)
    let tdButton = document.createElement("td")
    let button = createNode("button", "Eliminar")
    button.classList.add("btn", "btn-danger")
    //button.setAttribute("data-koder-index", koderId[index].id)
    button.onclick = () => removeKoder(id)
    tdButton.appendChild(button)
    tr.appendChild(tdIndex)
    tr.appendChild(tdName)
    tr.appendChild(tdLastName)
    tr.appendChild(tdButton)
    tBody.appendChild(tr)
  })
}

//printTable(arrayObject)*/