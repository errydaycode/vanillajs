const ages =[18, 20, 22, 1, 100, 90, 14]

const predicate =(age: number)=> {
    return age > 90
}


const oldAges = [100] // >90

export type courseType={
    title: string
    price: number
}

const courses: courseType[] = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}

]


const coursesPredicate = (course: courseType) => {
    return course.price < 160
}

const cheapCourses = [
    {title: 'CSS', price: 110},
    {title: 'REACT', price: 150}
]