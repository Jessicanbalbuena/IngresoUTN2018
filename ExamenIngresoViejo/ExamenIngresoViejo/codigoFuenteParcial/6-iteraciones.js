//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var venta;
    var  mayorVenta;
    var menorVenta;
    var flag = 0;
    
    for(var  i = 0 ; i < 7; i++)
    { 
        venta = parseFloat(prompt("Ingrese venta: "));

    }
    if(venta > mayorVenta || flag == 0)
    { mayorVenta = venta;
    }
   if(venta < menorVenta ||flag == 0)
      {
       menorVenta = venta;
       flag = 1;
      }

      alert("La mayor venta es $ " + mayorVenta + "y la menor $ " + menorVenta );
 }