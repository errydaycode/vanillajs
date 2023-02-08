import {mult, splitIntoWords, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(()=> {
    a = 1;
    b = 2;
    c = 3

})

test('sum should be correct', ()=> {


    // action
    const result1 = sum(a,b)
    const result2 = sum(b,c)

    //expect result

    expect(result1).toBe(3)
    expect(result2).toBe(5)



})

 test('mult should be correct', ()=> {


     const res1 = mult(c, b)
     const res2 = mult(a, b)

     expect(res1).toBe(6)
     expect(res2).toBe(2)

 })

test('splitting into words correct', ()=> {

    const sent1 = 'Hello my friend!'
    const sent2 = 'JS - the best programming language'


    const res1 = splitIntoWords(sent1)
    const res2 = splitIntoWords(sent2)

    expect(res1.length).toBe(3)
    expect(res1[0]).toBe('hello')
    expect(res1[1]).toBe('my')
    expect(res1[2]).toBe('friend')

    expect(res2.length).toBe(5)
    expect(res2[0]).toBe('js')
    expect(res2[1]).toBe('the')
    expect(res2[2]).toBe('best')
    expect(res2[3]).toBe('programming')
    expect(res2[4]).toBe('language')


})