import validator from './validator.js';

console.log(validator);
//modulares
//aquí van los eventos que corresponde al llamado del DOM (addEventListener)

//Botón
const botonValidate = document.getElementById("btnValidar");
botonValidate.addEventListener("click",function(){

    const valid = validator.isValid(document.getElementById("cardnumber").value)
    
    if (valid) { // "If" siempre es true.
    document.getElementById("result").innerHTML = "Tarjeta válida.Estamos procesando su compra...";
} else { // Show error message in div#result
    document.getElementById("result").innerHTML = "Tarjeta inválida. Por favor, ingrese nuevamente el número de su tarjeta.";
}

})