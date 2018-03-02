//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
   var numero;
   
   numero = parseFloat(prompt("Ingrese su importe"));

   document.getElementById("importe").value = numero * 1.21;
    }

