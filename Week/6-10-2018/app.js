// // var allProducts = []
// // function Products(name,brand,serial,price){
// //     this.serial = serial;
// //     this.name = name;
// //     this.brand = brand;
// //     this.price = price;
    
// //     // return this;
// // }
// // Products.prototype.cal = function(a,b){
// // return a * b
// // }
// // console.log(new Products("s6","samsung","ft990",30000))

// // var news =  new Products("s6","samsung","ft990",30000)
// // allProducts.push(news)

// // console.log(allProducts,"allProducts")

// var brands = []
// function Products(serial,name,price,brand){
//     this.serial = serial;
//     this.name = name;
//     this.price = price;
//     this.brand = brand;

//     return this;
// }
// Products.prototype.cal = function(a,b){
//     return a * b
// }
// console.log(new Products('ft900','s6',25000,"samsung"))
// var news = new Products('ft900','s6',25000,"samsung")

// brands.push(news)

function CellPhones(serial,name,brand,price){
    this.serial = serial
    this.name = name
    this.brand = brand
    this.price = price
}
var data = []
console.log(new CellPhones("s","samsung s4","samsung",23000))
var newData = new CellPhones("s","samsung s4","samsung",23000)
var newData1 = new CellPhones("A","samsung s4","samsung",23000)
data.push(newData)
data.push(newData1)
console.log(data)