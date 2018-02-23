function Mostrar()
{
 
	
	// declarar variables
	
	var respuesta='si';
	var contador=0;
	var min;
	var max;
	
	do {
		 numero = parseInt(prompt("Ingrese un numero"));
	  contador ++ ;
	  
	if(contador == 1)
	  { min = numero;
	max = numero;
     }
	if(numero >min)
	{ min = numero;
	}
	if(numero > max)
	{ max= numero;}

	 respuesta =  prompt("Desea continuar? si/no?");
	  }
	 	while(respuesta == "si");
document.getElementById('maximo').value=max;
document.getElementById('minimo').value=min; 
	
		
	
	




}//FIN DE LA FUNCIÓN