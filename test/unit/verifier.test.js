import { describe, it, expect } from 'vitest';
import { isPrime } from '../../src/verifier.js';
// describe - new test suite 
describe('Prime Verifier', () => {
        // test / it
    it('should correctly verify prime numbers', () => {
        expect(isPrime(0)).toBeFalsy() 
        expect(isPrime(2)).toBeTruthy()
        expect(isPrime(15)).toBeFalsy()
        // TODO: Call the `isPrime` function with some numbers and check the results
    });
});
