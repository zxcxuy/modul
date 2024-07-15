const evenorodd = require("./index.js");

num_even = 10;
num_odd = 17;
num_float = 3.5;
describe('tests for evenorodd function', ()=>{
    it("test for even num", ()=>{
        expect(evenorodd(num_even)).toBe(`Число ${num_even} четное!`)
    }),
    it("test for odd num", ()=>{
        expect(evenorodd(num_odd)).toBe(`Число ${num_odd} нечетное!`)
    }),
    it("test for float num", ()=>{
        expect(evenorodd(num_float)).toBe(`Число ${num_float} нечетное!`)
    })
})