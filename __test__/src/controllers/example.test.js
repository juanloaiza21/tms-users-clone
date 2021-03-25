const  example = require('../../../src/controllers/example');

describe('Calculos matematicos', () =>{
   test('Prueba de sumas', ()=> {
       expect(example.sumar(1,1)).toBe(2);
   });
   test('Prueba de multiplicaciones', () =>{
       expect(example.multiplicar(1,1)).toBe(1);
   })

   test('Prueba de restar', () =>{
       expect(example.restar(15,1)).toBe(14);
   })

   test('Prueba de division', () =>{
       expect(example.dividir(1,1)).toBe(1);
   })
});