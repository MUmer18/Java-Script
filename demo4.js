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
   var total = a + b;
   return total;
}

var name = addNumber("Muhammad ","Umer");
document.write("<h1>"+name+"</h1>")