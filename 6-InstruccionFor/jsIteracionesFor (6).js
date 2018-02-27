function Mostrar()
{

    var numero=parseInt(prompt("Ingresa un numero"));
    var contador=0;
   for(var i=1 ;i < numero; i++)

        {if (i % 2 == 0)
            { console.log(i);
            contador ++;}
    }

    console.log("Cantidad de numeros pares encontrados: "+contador);
   

   
}