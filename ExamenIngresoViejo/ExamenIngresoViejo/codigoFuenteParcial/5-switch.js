//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var mes;
    mes = prompt("Ingrese un mes: ");

    mes = mes.toLowerCase();

    switch(mes)
    {
        case "enero":
        case "febrero":
        alert("Veranitoo!!");
        break;

        default:
        alert("Extraño enero y febrero");
        break;

    }
}

