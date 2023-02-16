import {courseType} from "./04";


test('ages should take old men older than 90', ()=>{

    const ages =[18, 20, 22, 1, 100, 90, 14]


    const oldAges = ages.filter(a=>a>90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})

test('courses should cost no more than 160', ()=>{

    const courses: courseType[] = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150}

    ]
    /*const coursesPredicate = (course: courseType) => {
        return course.price < 160
    }*/
    const cheapCourses = courses.filter(t => t.price < 160)

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('CSS')
    expect(cheapCourses[1].title).toBe('REACT')

})


test('get only completed tasks', ()=> {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Meat', isDone: true},
        {id: 3, title: 'Eggs', isDone: false},
        {id: 4, title: 'Milk', isDone: true}
    ]

    const completedTasks = tasks.filter(t=> t.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)
})

test('get only uncompleted tasks', ()=> {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Meat', isDone: true},
        {id: 3, title: 'Eggs', isDone: false},
        {id: 4, title: 'Milk', isDone: true}
    ]

    const completedTasks = tasks.filter(t=> !t.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(1)
    expect(completedTasks[1].id).toBe(3)
})