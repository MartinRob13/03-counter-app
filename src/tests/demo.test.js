
describe('Pruebas en el archivo demo.test.js', () =>{

    test('deben de ser iguales los strings', ()=>{
  
        //Parte 1 inicializacion
        const mensaje= 'Hola Mundo';
    
        ////estimulo
        const mensaje2=`Hola Mundo`;
    
        ///Observar comportamiento
        expect( mensaje).toBe(mensaje2);
    
    })
});

