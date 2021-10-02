//variables y selectores
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const formulario = document.querySelector('.formulario')
const btn = document.querySelector('.btn-primary')
const tbody = document.querySelector('.table tbody')
let editando = false

//objeto literal que creo globalmente
let koderObj = {
    nombre: '',
    apellido: ''
}
//listeners
listeners()
function listeners(){
    nombre.addEventListener('change', datosKoder)
    apellido.addEventListener('change', datosKoder)
    btn.addEventListener('click', agregarUnKoder)
}

class Koder{
   constructor(){
       this.arregloKoders = []
   }
   agregarKoder(obj){
       this.arregloKoders = [...this.arregloKoders, obj]
   }
   eliminarKoder(id){
     this.arregloKoders = this.arregloKoders.filter(koder => koder.id !== id)
   }
   editarKoder(koderActualizado) {
     this.arregloKoders = this.arregloKoders.map(koder => koder.id === koderActualizado.id ? koderActualizado : koder)
   }
}

class UI{
   imprimirALerta(mensaje, tipo){
       const mensajeAnterior = document.querySelector('.men')
      if(!mensajeAnterior){
        const parrafo = document.createElement('p')
        parrafo.textContent = mensaje.toUpperCase()
        document.querySelector('.mensaje').appendChild(parrafo)

        if(tipo){
         parrafo.classList.add('bg-danger', 'text-light','text-center', 'mt-5', 'py-2', 'men')
        } else {
         parrafo.classList.add('bg-success','text-light','text-center', 'mt-5', 'py-2', 'men')
        }
        setTimeout(() => {
            parrafo.remove()
        }, 2000);
      }
   }
   mostrarHTML({arregloKoders}){
    this.limpiarHTML(tbody)

     arregloKoders.forEach( (koder, indice) => {
         const {id, nombre, apellido} = koder
         const tr = document.createElement('tr')
         const td = document.createElement('td')

         const btn = document.createElement('a')
         btn.classList.add('btn', 'btn-danger')
         btn.textContent = 'X'
         btn.onclick =() => eliminarKoder(id)

         const btnEdit = document.createElement('a')
         btnEdit.textContent = 'X'
         btnEdit.classList.add('btn', 'btn-warning', 'mx-1')
         btnEdit.onclick =() => editarKoder(koder)

         const tdindex = document.createElement('td')
         tdindex.textContent = indice + 1
         td.textContent = `${nombre} ${apellido}`
         tr.appendChild(tdindex)
         tr.appendChild(td)
         tr.appendChild(btn)
         tr.appendChild(btnEdit)
         tbody.appendChild(tr)
     })
  }
  limpiarHTML(elemento){
    while(elemento.firstChild){
        elemento.removeChild(elemento.firstChild)
    }
   }
}
//instanciar mis clases
const ui = new UI()
const instanciaKoder = new Koder()

//llenar el objeto usando el atributo 'name' q coencide con la propiedad del objeto literal
function datosKoder(e) {
     const input = e.target.value
     koderObj[e.target.name] = input[0].toUpperCase() + input.slice(1).toLowerCase()
}

function agregarUnKoder(e){
    e.preventDefault()
   if(koderObj.nombre === ''  || koderObj.apellido === ''){
       ui.imprimirALerta('campos obligatorios','error');
       return
   }
   if(editando){
    instanciaKoder.editarKoder( {...koderObj})
    ui.imprimirALerta('editado correctamente')
    editando = false
    reiniciarObjKoder()
   } else {
    koderObj.id = Date.now()
    instanciaKoder.agregarKoder( {...koderObj})
    ui.imprimirALerta('koder agregado correctamente')
    reiniciarObjKoder()
   }
    formulario.reset()
    ui.mostrarHTML(instanciaKoder)
}


function eliminarKoder(id){
   instanciaKoder.eliminarKoder(id)
   ui.mostrarHTML(instanciaKoder)
   ui.imprimirALerta('koder eliminado')
}

function editarKoder(koder){
    
   koderObj.apellido = koder.apellido
   koderObj.nombre = koder.nombre
   koderObj.id = koder.id

   apellido.value = koder.apellido
   nombre.value = koder.nombre

   editando = true
 }

function reiniciarObjKoder(){
    koderObj = {
        nombre: '',
        apellido: ''
    }
}

