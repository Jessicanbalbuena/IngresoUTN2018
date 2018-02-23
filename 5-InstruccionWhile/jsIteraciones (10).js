function Mostrar()
{ 
	var acumNegativos = 0;
	var acumPositivos = 0;
	var contPositivos = 0;
	var contCeros = 0;
	var contPares = 0;
	var promedioPositivo;
	var promedioNegativo;
	var diferencia;
	var numero;
	var seguir;

	//declarar contadores y variables 
	
  do 
   { numero = parseInt(prompt("ingrese un numero:   "));

   //me fijo el signo

   if ( numero < 0)
{
	acumNegativos = acumNegativos + numero;
	contNegativos++;
}

else if (numero >0)
{ acumPositivos = acumPositivos}

}//FIN DE LA FUNCIÓN