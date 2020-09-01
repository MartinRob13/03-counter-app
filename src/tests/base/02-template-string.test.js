import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string';


describe('pruebas en 02-template-string',  () =>{
    test('getSaludo debe de retornar hola nombre', () =>{
        
        const nombre="Martin";

        const saludo= getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
    })


    test('getSaludo debe de retornar hola carlos su esta vacio', () =>{

        const saludo = getSaludo();
        
        expect(saludo).toBe('Hola Carlos');
    })
})