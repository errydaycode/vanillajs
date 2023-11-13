export type UserType = {
    name: string,
    hair: number,
    address: {city: string, house: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType =  UserType & {
    laptop : LaptopType
}
export type UserWithBooksType =  UserType & {
    books : Array<string>
}

export type UserWithSkills = UserWithBooksType & {
    skills: Array<number>
}

export type WithCompaniesType = {
    companies: CompanyType[]
}
 export type CompanyType = {
    id: number
    title: string
 }





export function makeHairStyle(u: UserType, power: number) {
    const copy = {...u,
        hair: u.hair / power
        // address: {...u.address}
    }
    return copy
}

export function moveUser(u: UserWithLaptopType, newCity: string){
    return {...u, address: {...u.address, city: newCity}}
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number){
    return {...u, address: {...u.address, house}}
}

export function upgradeUserLaptop(u: UserWithLaptopType, newLaptop: string) {
    return {...u, laptop: {...u.laptop, title: newLaptop}}
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
    return {...u, books: [...u.books.concat(newBooks)]}
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
}
export function updateSkills(u: UserWithLaptopType & UserWithSkills, oldSkill: number, newSkill: number) {
    return {
        ...u,
        skills: u.skills.map(s => s === oldSkill ? newSkill : s)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string) {
    return {
        ...u,
        books: u.books.filter(b=> b !== oldBook)
    }
}

export function addCompany(user: UserWithLaptopType  & WithCompaniesType, google:string) {
    return {
        ...user,
        companies: [...user.companies, {id: 3, title: google}]
    }
}

export function updateCompanyTitle(u: UserWithLaptopType  & WithCompaniesType, id: number, newTitle: string) {
    return {
        ...u, companies: u.companies.map(c=> c.id === id ? {...c, title: newTitle} : c)
    }
}

export function updateCompanyTitle2(companies: {[key: string] : CompanyType[]}, userName: string, companyId: number, newTitle: string) {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map( c => c.id === companyId ? {...c, title:newTitle} : c)

    return companyCopy
}