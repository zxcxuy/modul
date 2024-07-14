import { evenorodd } from "./index.js";

num1 = 10;
num2 = 17;
num3 = 3.5;
describe('tests for evenorodd function', ()=>{
    it("test for even num", ()=>{
        expect(evenorodd(num1)).toBe(`Число ${num1} четное!`)
    })
})