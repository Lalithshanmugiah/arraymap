const number = [20,40,35,25];
const number2 = number.map(myFunction);
let text ="";
document.getElementById("para").innerHTML=number2;
function myFunction(value, index, array){
return value * 2
}