import { getUser, getUsuarioActivo } from "../../base/05-funciones";
import '@testing-library/jest-dom';


describe('pruebas de 05-funciones', () =>{
    
    test('getUser debe de retornar un objeto', () =>{
        
        const usuario ={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(usuario);

    });

    test('getUserActivo debe de devolver un objeto', () =>{

        const nombre="Martin";

        const activeUser={
            uid: 'ABC567',
            username: nombre
        };

        const funcionactive = getUsuarioActivo(nombre);

        expect(funcionactive).toEqual(activeUser);

    });

})