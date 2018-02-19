function Mostrar()
{

	var numero;
	var acumulador=0;
	var contador=0;
	var respuesta;
	var promedio;

	do {
		 numero = parseInt(prompt("Ingrese un numero"));
      acumulador = acumulador + numero;
	  contador = contador + 1;
	  respuesta =  prompt("Desea continuar? si/no?");
	}while (respuesta == "si") 
	
	
	 	promedio = acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/promedio;


}//FIN DE LA FUNCIÓN