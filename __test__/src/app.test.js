import { sumar, multiplicar, restar, dividir } from '../../../src/controllers/example';

describe('Calculos matematicos', () =>{
   test('Prueba de sumas', ()=> {
       expect(sumar(1,1)).toBe(2);
   });
   test('Prueba de multiplicaciones', () =>{
       expect(multiplicar(1,1)).toBe(1);
   })

   test('Prueba de restar', () =>{
       expect(restar(15,1)).toBe(14);
   })

   test('Prueba de division', () =>{
       expect(dividir(1,1)).toBe(1);
   })
});