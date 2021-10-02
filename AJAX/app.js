let kodersArray = []


const getKoders = () => {
  const xhr = new XMLHttpRequest()
  // Agregando el listener para ver el estado de mi peticion
  xhr.addEventListener('readystatechange', () => {

    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status <= 299) {

        let responseAjax = xhr.responseText

        let responseParsed = JSON.parse(responseAjax)

        kodersArray = []
        for (const prop in responseParsed) {
          kodersArray.push({ id: prop , name: responseParsed[prop].name, lastName: responseParsed[prop].lastName })

        }

        printTable()
      } else {
        console.log("Ocurrio un error: ", xhr.status, "Not Found")
      }
    }
  })
  // instruccion que me me permite abrir la peticion
  xhr.open("GET", "https://api-13va-default-rtdb.firebaseio.com/.json", true)
  xhr.send()
}

getKoders()

const createKoder = (koderObject) => {
  const xhr = new XMLHttpRequest()
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText)
      }
    }
  })
  xhr.open("POST", "https://api-13va-default-rtdb.firebaseio.com/.json", true)
  xhr.send(JSON.stringify(koderObject))
}

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
  if (newKoder.name === '' || newKoder === '' ){
    mensajito('CAMPOS OBLIGATORIOS!!!!!!!!!!!!!', 'error')
  } else {

    createKoder(newKoder)
    document.querySelector('#added-koders').reset()
    mensajito('koder añadido!!!!!')
  }
  getKoders()
})

function mensajito(x, tipo){
  const parrafo = document.createElement('p')
  parrafo.textContent = x
  if(tipo){

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

function removeKoder (id) {

 mensajito("Eliminando........... jeje")

 deleteKoder(id)

 //window.location.reload();
   //getKoders()
  kodersArray = kodersArray.filter( koder => koder.id !== id)
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

//printTable(arrayObject)