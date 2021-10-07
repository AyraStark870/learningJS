
// AJAX con jQuery

// $.ajax({
//     method: "GET", /*|| "POST" || "PUT" || "DELETE" || "PATCH"*/
//     url: "endpoint", /*A donde hacemos la peticion */
//     data: JSON.stringify({}), /*La que se envia en el body de la peticion - POST, PUT, PATCH */
//     success: (response) => {
//         // callback para cuando la peticion sea exitosa
//     },
//     error: (error) => {
//         // callback para cuando hay un error en la peticion
//     },
//     async: true
// })
/*

// funciones AJAX
const getData = () => {
  let products
  $.ajax({
    method: "GET",
    url: "https://api-friki-market-default-rtdb.firebaseio.com/products.json",
    success: response => {
      // console.log('response al terminar la peticion',response)
      products = response
    },
    error: error => {
      console.log(error)
    },
    async: false
  })
  // console.log(products)
  return products
}

const createProduct = (productObject) => {
  $.ajax({
    method: "POST",
    url: "https://api-friki-market-default-rtdb.firebaseio.com/products.json",
    data: JSON.stringify(productObject),
    success: (response) => {

    },
    error: error => {

    }
  })
}

const updateProduct = (keyProduct, newDataProduct) => {
  $.ajax({
    method: "PATCH",
    url: `https://api-friki-market-default-rtdb.firebaseio.com/products/${keyProduct}.json`,
    data: JSON.stringify(newDataProduct),
    success: (response) => {

    },
    error: error => {

    }
  })
}
const deleteProduct = keyProduct => {
  $.ajax({
    method: "DELETE",
    url: `https://api-friki-market-default-rtdb.firebaseio.com/products/${keyProduct}.json`,
    success: (response) => {

    },
    error: error => {

    }
  })
}



// Funciones DOM



// const

// variables globales
// todas funciones
// ejecucion de codigo


// Asycn: true

/*
46 - undefined
47 console.log("más codigo JS")
49 console.log("la suma es", suma)
38 console.log('response al terminar la peticion',response)
*/

// async: false

/*
38 console.log('response al terminar la peticion',response)
46 - productos  de la base de datos
47 console.log("más codigo JS")
49 console.log("la suma es", suma)
*/

//let products = getData()

// https://api-13va-default-rtdb.firebaseio.com/[su-nombre]/mentors.json

// sincrono




// asincrono


let nuevoKoder = {

}





   let editando
  const getKoders = () => {
    let koders
    $.ajax({
      method: "GET",
      url: "https://api-13va-default-rtdb.firebaseio.com/clau/mentors.json",
      success: response => {
        // console.log('response al terminar la peticion',response)
        koders = response
        mostrarKoders(koders)

      },
      error: error => {
        console.log(error)
      },
      async: false
    })

  }
getKoders()

 function mostrarKoders(arregloKoders){
   let arreglo = []


 //  console.log(arregloKoders);
   //let x = arregloKoders.clau.mentors
    for (const key in arregloKoders ) {
     arreglo.push( arregloKoders[key] );
     arreglo.forEach( item => item.id = key)
   }
   dibujarCards(arreglo)
 }

 function dibujarCards(array){
   //console.log(array);
   let misCards = document.querySelector('.mis-cards')


   while(misCards.firstChild){
     misCards.removeChild(misCards.firstChild)
    }
   array.forEach( koder =>{
     const {nombre,github,githubUrl,id} = koder


  //   modales.classList.add('d-flex')
     let mydiv = document.createElement('div')
     mydiv.classList.add('card','m-5')
     mydiv.setAttribute('style', "width: 18rem;")
     otrodiv = document.createElement('div')
     otrodiv.classList.add('card-body')

     let myh5 = document.createElement('h5')
     myh5.classList.add('card-title')
     myh5.textContent = `nombre: ${nombre}`

     let myp = document.createElement('p')
     myp.textContent = `github: ${github}`
     myp.classList.add('card-text', 'name')

     let btnEliminar = document.createElement('a')
     btnEliminar.classList.add('btn','btn-danger','mx-3')
     btnEliminar.textContent = 'Borrar'
     btnEliminar.onclick = () => deleteKoder(id)

     let btnEditar = document.createElement('a')
     btnEditar.classList.add('btn','btn-primary')
     btnEditar.textContent = 'Editar'
     btnEditar.onclick = () => editarKoder(koder)

     let modales = document.createElement('div')
     modales.classList.add('row')

     let modalesSegundo = document.createElement('div')
     modales.classList.add('col-10')

     const enlace  = document.createElement('a')
     enlace.setAttribute("data-toggle","modal")
     enlace.setAttribute("data-target","#modal")
     enlace.setAttribute("aria-labelledby","modal")
     enlace.setAttribute("aria-hidden","true")
     enlace.textContent ='abrir en modal'
     modales.classList.add('btn', 'btn-success', 'mt-2')

     let divTercer = document.createElement('div')
     divTercer.classList.add('modal','fade')
     divTercer.setAttribute("id", "modal")
     divTercer.setAttribute("tabindex", "- 1")
     divTercer.setAttribute("role", "dialog")

     let divCuatro = document.createElement('div')
     divCuatro.classList.add('modal-dialog')
     divCuatro.setAttribute("role", "document")

     let divCinco = document.createElement('div')
     divCinco.classList.add('modal-content')

     let divSexto = document.createElement('div')
     divSexto.classList.add('modal-header')

     const myh2 = document.createElement('h2')
     myh2.classList.add('modal-title')
     myh2.textContent = nombre

     misCards.appendChild(mydiv)
     mydiv.appendChild(otrodiv)
     otrodiv.appendChild(myh5)
     otrodiv.appendChild(myp)
     otrodiv.appendChild(btnEliminar)
     otrodiv.appendChild(btnEditar)

     modalesSegundo.appendChild(enlace)
     modalesSegundo.appendChild(divTercer)
     divCuatro.appendChild(divCinco)
     divCinco.appendChild(divSexto)
     divSexto.appendChild(myh2)
     divTercer.appendChild(divCuatro)
     modales.appendChild(modalesSegundo)
     otrodiv.appendChild(modales)

/*
           <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#modal" aria-labelledby="modal" aria-hidden="true">
               abrir en modal
            </a>

            <div id="modal" class="modal fade"  tabindex="-1" role="dialog">
               <div class="modal-dialog" role="document">
                 <div class="modal-content">
                    <div class="modal-header">
                       <h2 class="modal-title">KODER!</h2>
                    </div>
                 </div>

               </div>
*/
   })
 }


  function enviandoDatos(e){
    e.preventDefault()
    console.log(editando);


        nuevoKoder.nombre = $('#nombre').val()
        nuevoKoder.telefono = $('#telefono').val()
        nuevoKoder.telefono = $('#telefono').val()
        nuevoKoder.github = $('#github').val()
        nuevoKoder.githubUrl = $('#github-url').val()


    if (!editando){

      enviarDatos(nuevoKoder);

    } else if (editando) {
      alert('EDITO')
      console.log('*******');
      console.log(nuevoKoder);
      editandoDB(nuevoKoder)
      editando = false
    }
    document.querySelector('#nuevo-koder').reset()
    getKoders()
  }

  const enviarDatos = (koderObject) => {
    $.ajax({
      method: "POST",
      url: "https://api-13va-default-rtdb.firebaseio.com/clau/mentors.json",
      data: JSON.stringify(koderObject),
      success: (response) => {
    //   console.log(response);
      },
      error: error => {
      console.log(error);
      }
    })
  }


  $('#nuevo-koder').on('submit', enviandoDatos)//los submit por default tienen la accion de procesar el formulario


  function deleteKoder(id){
    $.ajax({
      method: "DELETE",
      url: `https://api-13va-default-rtdb.firebaseio.com/clau/mentors/${id}.json`,

   //   url: `https://api-friki-market-default-rtdb.firebaseio.com/products/${keyProduct}.json`,
      success: (response) => {
       console.log(response);
       getKoders()
      },
      error: error => {
       console.log(error);
      }
    })
  }


function editarKoder(unKoder){
  const { nombre, github, githubUrl, telefono, id } = unKoder
  console.log(id);

  $('#nombre').val(nombre)
  $('#telefono').val(telefono)
  $('#github-url').val(githubUrl)
  $('#github').val(github)

   nuevoKoder.id= id
   console.log(nuevoKoder);

  editando = true
  console.log(editando);

}
function editandoDB(koder){
  console.log('desde editar');
    let {id} = koder
    console.log(id);
    $.ajax({
      method: "PUT",
      url: `https://api-13va-default-rtdb.firebaseio.com/clau/mentors/${id}.json`,
      data: JSON.stringify(koder),
      success: (response) => {
        console.log('se hizo el update', response);
        getKoders()
      },
      error: error => {
        console.log(' NO se hizo el update', error);
      }
    })

}