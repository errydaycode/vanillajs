
import {StudentType} from "../02/02";
import {addSkill, doesStudentLivesInCity, makeStudentActive} from "./03";
let student: StudentType;

beforeEach(()=>{
    student =  {
        id: 1,
        name: 'Georgii',
        age: 25,
        isActive: false,
        address: {
            streetTitle: 'Lenina',
            city: {
                title: 'Moscow',
                country: 'Russia'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML&CSS'
            },
            {
                id: 2,
                title: 'React'
            },
            {
                id: 3,
                title: 'JS'
            }
        ]
    }

})

test('technologies should be updated', ()=> {

    expect(student.technologies.length).toBe(3)
    addSkill(student, 'redux')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('redux')
    expect(student.technologies[3].id).toBeDefined()


})

test('student should be active', ()=> {

    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)


})

test('does student lives is city', ()=> {


    let result1 = doesStudentLivesInCity(student, "Moscow")
    let result2 = doesStudentLivesInCity(student, "Minsk")

    expect(result1).toBe(true)
    expect(result2).toBe(false)


})