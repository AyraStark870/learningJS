const productos = [
   {
    nombre: 'cacabel',
    fechaCaducidad : '2022/09/23',
    precioVenta: 13,
    precioCompra: 4,
    precioUltimosMeses: [],
    cantVendidasUltimaSemana: 7
   },
   {
    nombre: 'espuela',
    fechaCaducidad : '2024/01/07',
    precioVenta: 28,
    precioCompra: 11,
    precioUltimosMeses: [],
    cantVendidasUltimaSemana: 70
   },
   {
    nombre: 'latigo',
    fechaCaducidad : '2021/11/20',
    precioVenta: 100,
    precioCompra: 57,
    precioUltimosMeses: [],
    cantVendidasUltimaSemana: 57
   }

]

class ProductoObj {
    constructor(name, caducity, sellPrice, id, unitSoldLastWeek, purchasePrice){
        this.id = id;
        this.name = name;
        this.caducity = caducity ;
        this.sellPrice = sellPrice;
        this.unitSoldLastWeek = unitSoldLastWeek
        this.clasification =  this.sellPrice > 50 ? 'expensive' : 'cheap'
        this.description = `soy un ${this.name}, con un identificador unico que es ${this.id}  mi precio actual es ${this.sellPrice} pesos y soy ${this.clasification}}`
        this.lastMonth()
        this.purchasePrice = purchasePrice
        this.profit= this.profitPerCent()
    };
    lastMonth() {
        this.lastMonthPrices = [];
        for(let i = 0; i < 6; i++){
            let price = Math.ceil( Math.random()*this.sellPrice)
            this.lastMonthPrices = [...this.lastMonthPrices, price]
        }
        return this.lastMonthPrices
   }
   sellPriceAverageLastMonths(){
    let averag = this.lastMonthPrices.reduce( (accum, price)  => {
        return accum + price
      }, 0)
      return `el promedio de precio de los ultimos 6 meses fue ${(averag/this.lastMonthPrices.length).toFixed(2)} `

    }
    profitPerCent(){
        let profit = 100 -( this.purchasePrice*100/this.sellPrice)
        return `la ganancia bruta por unidad vendidad en porciento es ${profit.toFixed(2)}`
    }

    daysToExpire(){
        let fechaCaducidad = new Date(this.caducity).getTime();
        let hoy = new Date().getTime();
        let diferencia = fechaCaducidad-hoy
        return parseInt(diferencia / (1000 * 60 * 60 * 24))
        /*)
        var fechaInicio = new Date('2016-07-12').getTime();
var fechaFin    = new Date('2016-08-01').getTime();

var diff = fechaFin - fechaInicio;

console.log(diff/(1000*60*60*24) );*/
    }

}
//var elvisLives = Math.PI > 4 ? "Sip" : "Nop";

const productosObj =  productos.map( (prod, i) => new ProductoObj(prod.nombre, prod.fechaCaducidad,  prod.precioVenta,i, prod.cantVendidasUltimaSemana,prod.precioCompra))


const muchasCantidadesVendidas = () => {
    let masVendidos =  productosObj.filter(prod => prod.cantVendidasUltimaSemana > 50)
    return masVendidos
}

console.log(muchasCantidadesVendidas());
console.log(productosObj);
console.log(productosObj[0].daysToExpire());

