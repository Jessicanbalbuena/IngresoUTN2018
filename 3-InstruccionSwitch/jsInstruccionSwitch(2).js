function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

alert(mesDelAño)

switch(mesDelAño)

{case"Enero":
case"Febrero":
case "Marzo":
case "Abril":
case"Mayo":
case"Junio":
alert("Falta poco para el invierno");
break;
case"Julio":
case"Agosto":
alert("Abrigate que hace frio");
break;
case"Septiembre":
alert("Ya pasamos elfrio, ahora el calor");
break;
case"Octubre":
case"Noviembre":
case"Diciembre":
 }




}//FIN DE LA FUNCIÓN