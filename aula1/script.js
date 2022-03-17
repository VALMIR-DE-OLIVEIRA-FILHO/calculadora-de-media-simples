function calculo(params) {
var numero1= document.getElementById("nota1").value;
var numero2= document.getElementById("nota2").value;
var numero3= document.getElementById("nota3").value;


var media= (parseInt(numero1)+ parseInt(numero2)+ parseInt(numero3))/3;



document.querySelector("#resultado").innerHTML =  media.toFixed(2);

}