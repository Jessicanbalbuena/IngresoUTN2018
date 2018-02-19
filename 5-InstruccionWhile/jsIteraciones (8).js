function Mostrar()
{

	var numero;
	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta;

	do {
		 numero = parseInt(prompt("Ingrese un numero"));
      acumulador = acumulador + numero;
	  contador = contador + 1;
	  respuesta =  prompt("Desea continuar? si/no?");
	}while (respuesta == "si");
	
	
	 	promedio = acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/promedio;




}//FIN DE LA FUNCIÓN