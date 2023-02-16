import {greetingMessage, ManType} from "./05_01";



let people: Array<ManType>

beforeEach(()=> {
    people = [
        { name: 'Andrew Ivanov', age: 33 },
        { name: 'Alexander Petrov', age: 24 },
        { name: 'Dmitry Sidorov', age: 18 },
    ]
})


test('should get array of greeting messages',()=> {

    const messages = greetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Welcome to IT-INCUBATOR Andrew")
    expect(messages[1]).toBe("Welcome to IT-INCUBATOR Alexander")
    expect(messages[2]).toBe("Welcome to IT-INCUBATOR Dmitry")

})