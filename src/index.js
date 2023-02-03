//archivo principal JS
//aquí van los eventos que corresponde al llamado del DOM (addEventListener)
import validator from './validator.js';

console.log(validator);
const resultTarjeta = document.getElementById("result");
//Botón
const botonValidate = document.getElementById("btnValidar");
botonValidate.addEventListener("click", function () {
    const numberValue = document.getElementById("cardnumber").value
    if (numberValue == "") {
        resultTarjeta.innerHTML = "Por favor ingresa un número de tarjeta.";
    } else {

        const valid = validator.isValid(numberValue);
        const resultadoMaskify = validator.maskify(numberValue);
        if (valid) { // "If" siempre es true.
            resultTarjeta.innerHTML = "Tarjeta " + resultadoMaskify + " válida.Estamos procesando su compra...";
            document.getElementById("cardnumber").value = ""; //TODO para que se refresque el input y no quede el número de la tarjeta en el input
        } else { // Show error message in div#result
            resultTarjeta.innerHTML = "Tarjeta inválida. Por favor, ingrese nuevamente el número de su tarjeta.";
        }
    }
})