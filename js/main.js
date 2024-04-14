// <-- Primera pre entrega: Simulador interactivo --> 
let primerAuto = "Masserati";
let segundoAuto = "Porsche";
let tercerAuto = "Alfa Romeo";

const valorPrimerAuto = 20000
const valorSegundoAuto = 50000
const valorTercerAuto = 40000
// <-- Utilice el metodo Math.floor() para eliminar los decimales en las diviciones. -->
// <-- Utilice el metodo toLocaleString() para formatear el numero y que lo devuelva con '.' cuando son miles. -->
function cuotasAPagar(cuota){
    let opcionCuota;
    do{
        opcionCuota = parseInt(prompt("Ingrese las Cuotas a Pagar:\n\n 1. En 1 Cuota\n 2. En 3 Coutas\n 3. En 6 Cuotas\n"));
        if (opcionCuota === 1) {
            alert("El total a pagar es de: $" + cuota); 
        } else if (opcionCuota === 2) {
            let total = Math.floor(cuota / 3);
            return alert("El total a pagar en 3 Cuotas por mes es de: $" + total.toLocaleString());
        } else if (opcionCuota === 3){
            let total = Math.floor(cuota/ 6);
            return alert("El total a pagar en 6 Cuoutas por mes es de: $" + total.toLocaleString());
        } else {
            alert("La opción que ingresaste no es correcta. Ingresaste " + "'"+opcionCuota+"'");  
        }
    } while (opcionCuota !== 1 && opcionCuota !== 2 && opcionCuota !== 3); 
}
// <-- Preguntar si el usuario quiere volver hacer una compra. -->
function salir(numero){
       numero = parseInt(prompt("Si desea continuar en nuestro Comercio, presione el Botón 'Aceptar'.\n\nPara salir, Ingrese '0'"));
        if (numero === 0) {
            opcionElegida = numero;
            alert("Esperamos que disfrute su ¡¡Nuevo Auto!!\n\nSaludos.")
        } else {
            return numero; 
        }
} 
// <-- Informacion que puede ser "visualizada" por el admin desde la consola del navegador. -->
function obtenerInformacion(nombre, apellido, auto, dato) {
    console.log("Información del Usuario:\nNombre: " + nombre + "\nApellido: " + apellido + "\nAuto Elegido: " + auto + "\nTotal a Pagar: " + dato);
}

do {
    confirm("¡Bienvenido! Usted acaba de ingresar a nuestro Comercio, elija su Auto de Preferencia!!\n\n A continuacion le pediremos sus datos.");
    let nombreUsuario = prompt("Ingrese su Nombre: ");
    let apellidoUsuario = prompt("Ingrese su Apellido: ");
    opcionElegida = parseInt(prompt("Ingrese el Numero del Auto que Usted quiere solicitar:\n\n 1. " + primerAuto +" $" + valorPrimerAuto +"\n 2. " + segundoAuto +" $" + valorSegundoAuto + "\n 3. " + tercerAuto+" $" + valorTercerAuto+"\n\n Para salir, Ingrese '0'"));
    switch(opcionElegida){
        case 0:
            alert("Esperamos que algun día tenga su Auto!");
            break;    
        case 1:
            cuotasAPagar(valorPrimerAuto);
            alert("Que disfute su " + primerAuto + "!!");
            obtenerInformacion(nombreUsuario, apellidoUsuario, primerAuto,valorPrimerAuto);
            salir(opcionElegida);
            break;    
        case 2:
            cuotasAPagar(valorSegundoAuto);
            alert("Que disfute su " + segundoAuto + "!!");
            obtenerInformacion(nombreUsuario, apellidoUsuario, segundoAuto,valorSegundoAuto);
            salir(opcionElegida);
            break;   
        case 3:
            cuotasAPagar(valorTercerAuto);
            alert("Que disfute su " + tercerAuto + "!!");
            obtenerInformacion(nombreUsuario, apellidoUsuario, tercerAuto,valorTercerAuto);
            salir(opcionElegida);
            break;   
        default:
            alert("La opción que ingresaste no es correcta. Ingresaste " + "'"+opcionElegida+"'");    
    }
} while (opcionElegida !== 0);
// <-- Fin - Primera pre entrega: Simulador interactivo --> 
