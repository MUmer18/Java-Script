//arrays
// var arr = ["car","bike","cycle"];
// arr.push("boat");
// for(var i = 0; i < arr.length; i++){
//     document.write("<h1>"+ arr[i]+ "</h1>")
// }

// objects
// var car={
// brand : "Honda",
// model : "2019",
// price : "30 lacs",
// autopilot : function(){
//     document.write("<h2>the car has auto pilot</h2>")
// }
// }
// car.autopilot()
// document.write("<h1>"+car.brand+"</h1>");


function Cars(car_brand, car_model, car_price)
{
    this.car_brand = car_brand;
    this.car_model = car_model;
    this.car_price = car_price;
    this.autopilot = function()
    {
        document.write("<h1>this car has autopilot</h1>");
    }
}
var car1 = new Cars("Honda", "2019","30 lacs");
car2 = new Cars("Corolla", "2020", "28 lacs")
document.write("<h1>"+car1.car_brand+"</h1>")
car1.autopilot();
document.write("<h1>"+car1.car_model+"</h1>");
document.write("<h1>"+car2.car_brand+car2.car_model +" "+ car2.car_price+"</h1>");
car2.autopilot();