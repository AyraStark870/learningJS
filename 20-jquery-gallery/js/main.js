
let imgArray = [
    "https://picsum.photos/id/169/500/300",
    "https://picsum.photos/id/170/500/300",
    "https://picsum.photos/id/171/500/300",
    "https://picsum.photos/id/172/500/300"
]

let positionCurrent = 0


const setImgSrc = (src) => {
    $(".gallery-wrapper img").attr("src", src).fadeTo('slow', 0, () => {
        $(".gallery-wrapper img").attr("src", src).fadeTo('slow', 1)
    })
}

const setButtonsState = () => {
    // estamos en la primara imagen
    positionCurrent === 0
     ? $(".backward").prop("disabled", true)
     : $(".backward").prop("disabled", false)

    // cuando identifiquemos la ultima imagen
    positionCurrent === imgArray.length - 1
     ? ($(".forward").prop("disabled", true), $(".add-images").removeClass("d-none"))
     : ($(".forward").prop("disabled", false), $(".add-images").addClass("d-none"))
}

const forward = () => {
    positionCurrent++
    let src = imgArray[positionCurrent]
    setImgSrc(src)
    setButtonsState()
}

const backward = () => {

    positionCurrent--

}



$(".gallery-wrapper .btn-primary ").click((e)=> {
    let elemento = e.target
    if ($(elemento).hasClass('forward')){
        positionCurrent++
    } else {
        positionCurrent--
    }
    let src = imgArray[positionCurrent]
    setImgSrc(src)
    setButtonsState()
})
/*
$(".forward").click(forward)
$(".backward").click(backward)
*/
// inicializando el valor de la imagen


setImgSrc(imgArray[positionCurrent])
setButtonsState()

$('.add-images').click(conseguirImg)

function conseguirImg(){
    let url = "https://tarea-bootcamp-default-rtdb.firebaseio.com/products.json"
    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(datos => {
            datos  = Object.keys(datos).map(key => {
                let product = datos[key]
                return { ...product, id: key }
            })
            return datos
        })
      .then(arreglo => {
          arreglo.forEach(x => imgArray.push(x.url) )
          return imgArray
        })
        .catch(error => {
            console.log(error)
        });
       $(".forward").prop("disabled", false)

}
