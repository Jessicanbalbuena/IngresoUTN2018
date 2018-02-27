/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{var num1
var num2
var num3
var suma
var total

num1 = document.getElementById("PrecioUno").value;
num1 = parseFloat(num1);

num2 = document.getElementById("PrecioDos").value;
num2 = parseFloat(num2); 

num3 = document.getElementById("PrecioTres").value;
num3 = parseFloat(num2);

total = num1 + num2 + num3 
alert("El total es: " + total);
	
}
function Promedio () 
{ var num1
    var num2
    var num3
    var total;
    var promedio
    num1 = parseFloat(document.getElementById("PrecioUno").value);
    num2  = parseFloat(document.getElementById("PrecioDos").value);
    num3 = parseFloat(document.getElementById("PrecioTres").value);

    total = num1 + num2 + num3;

  promedio = total / 3;	

  alert("El promedio de los precios es  "+ promedio)
}
function PrecioFinal () 
{
    var num1;
    var num2;
    var num3;
    var total;
    var iva21;
    var precioFinal;

    num1 = parseFloat(document.getElementById("PrecioUno").value);
    num2  = parseFloat(document.getElementById("PrecioDos").value);
    num3 = parseFloat(document.getElementById("PrecioTres").value);

     total = num1 + num2 + num3;

     iva21 = total *.21; 
    
     precioFinal = total + iva21;

     alert("El precio final es " + precioFinal);
}
