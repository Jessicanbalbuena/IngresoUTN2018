function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño)
{ case"Febrero":
alert("Este mes no tienea mas de 29 dias");
break;
default: 
alert("Este mes tiene 30 o mas dias");
break;
}
	


}//FIN DE LA FUNCIÓN