const { retornaArreglo } = require("../../base/07-deses-arr")

describe('Pruebas de desestructuracion', () =>{
    test('Debe de regresar un string y un numero', () =>{

        const [letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(typeof(letras)).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof(numeros)).toBe('number');
    })

})