//Aquí van todas las funciones que son "funciones puras".
//Key:value --> isvalid y maskify

function validarPuestoPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }

}
//Siempre que hayan funciones anexas, hay que dejarla arriba.

const validator = {

    isValid: function (creditCardNumber) { //la función va a recibir un parámetro. En lugar de darle un nombre a la función, el método es una función

        let convertirArray = creditCardNumber.split("")
        // console.log(convertirArray);
        let invertirArray = convertirArray.reverse();
        // console.log(invertirArray);

        let sumaTotal = 0 //variable

        for (let index = 0; index < Number(invertirArray.length); index++) { //4137894711755904

            const element = parseInt(invertirArray[index]);
            // obtiene el elemento del Array con el índice: Ex. Array= [1,2,3]

            const esPar = validarPuestoPar(index);
            //console.log(" está en la posición par? : " + esPar);

            if (!esPar) {
                let resultado = element * 2;
                if (resultado > 9) {
                    let numerosArray = resultado.toString().split("");
                    let numerosArraySumados = (Number(numerosArray[0]) + Number(numerosArray[1]));
                    //console.log(numerosArraySumados);

                    sumaTotal += numerosArraySumados; // está abreviado. Suma la variable sumaTotal + numerosArraySumados  (>9)
                    //console.log("estos números son >9: " + sumaTotal);
                } else {
                    sumaTotal += resultado; //números de resultados son los que se *2 pero son menores a 9 (<9)
                    //console.log("estos números son <9 que estan en la posición par: " + sumaTotal);
                }
            } else { // guardar el valor del puesto impar
                sumaTotal += element //números del puesto impar
                //console.log(element);
            }
        }
        //console.log(sumaTotal); son las iteraciones totales ya sumadas (contiene todos los números de cada iteración)

        return sumaTotal % 10 === 0
    },


    maskify: (numero) => {
        // function maskify(número) pero se escribe de la siguiente manera: => es un function mas actual - recibe el argumento que es el número
        const fourSaved = numero.slice(-4)
        //console.log("estos son los fourSaved: " + fourSaved)
        let michi = ""
        for (let i = 0; i < numero.length; i++) {
            michi = michi + "#"
        }
        //console.log("estos son los michis: " + michi)

        const forMichi = michi.slice(0, -4)
        let result = forMichi + fourSaved
        //Se concatenaron los números que ya tienen michis (-4 últimos números) + 4 últimos dígitos sin michis
        console.log(result)

        return result; //retorno es la finalización.
    }
}




export default validator;
//validator va a exportar su información a index.js