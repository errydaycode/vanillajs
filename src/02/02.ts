
type LocalCityType ={
    title: string,
    country: string
}

type AddressType={
    streetTitle: string
    city: LocalCityType
}

type StudentType={
    id: number,
    name: string,
    age: number,
    isStudent: boolean
    address: AddressType
    technologies: TechnoligiesType[]
}

type TechnoligiesType={
    id: number
    title: string
}


const student: StudentType = {
    id: 1,
    name: 'Georgii',
    age: 25,
    isStudent: true,
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

console.log(student.address.city.title)
console.log(student.technologies[2].title)