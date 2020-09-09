//functions
// function addNumber(){
//     var a = 3;
//     var b = 2;
//     var total = a + b;
//     document.write("<h2>" + total+"</h2>")
// }

// addNumber()

// function addNumber(a, b){
//      //a = 3;
//      ///b = 4;
//     var total = a + b;
//     document.write("<h2>" + total+"</h2>")
// }

// addNumber("Muhammad ","Umer")

function addNumber(a, b){
   var total = a + b; //local variab;le
   return total;
}
var number = 7; //global variable
var name = addNumber("Muhammad ","Umer");
document.write("<h1>"+name+"</h1>");
//document.write(total); //it will not display anything because it is locally declared
document.write(number); 