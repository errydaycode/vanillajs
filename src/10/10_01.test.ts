import {
    addCompany,
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateSkills,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, UserWithSkills, WithCompaniesType
} from "./10_01";



test('reference type test', ()=> {

    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: "Belgrade",
            house: 12
        }
    }
    const awesomeUser = makeHairStyle(user, 2);

    user = awesomeUser

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)

 
})

test('change address test', ()=> {

    let user: UserWithLaptopType = {
        name: 'Georgy',
        hair: 32,
        address: {
            city: "Belgrade",
            house: 12
        },
        laptop: {
            title: 'hp'
        }
    }
    const movedUser = moveUser(user, 'NY');

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('NY')

})


test('upgrade laptop to macbook', ()=> {

    let user: UserWithLaptopType = {
        name: 'Georgy',
        hair: 32,
        address: {
            city: "Belgrade",
            house: 12
        },
        laptop: {
            title: 'hp'
        }
    }
    const macbookUser = upgradeUserLaptop(user, 'Macbook');

    expect(user).not.toBe(macbookUser)
    expect(user.laptop).not.toBe(macbookUser.laptop)
    expect(user.address).toBe(macbookUser.address)
    expect(user.laptop).not.toBe(macbookUser.laptop)
    expect(macbookUser.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('hp')
})


test('user with array of books', ()=> {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Georgy',
        hair: 32,
        address: {
            city: "Belgrade",
            house: 12
        },
        laptop: {
            title: 'hp'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = moveUserToOtherHouse(user, 99);

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)

})


test('add new books to user', ()=> {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Georgy',
        hair: 32,
        address: {
            city: "Belgrade",
            house: 12
        },
        laptop: {
            title: 'hp'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = addNewBooksToUser(user, ['ts', 'rest api']);

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest api')

})

test('update js to ts ', ()=> {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Georgy',
        hair: 32,
        address: {
            city: "Belgrade",
            house: 12
        },
        laptop: {
            title: 'hp'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = updateBook(user, 'js', 'ts');

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})


test('update user skills  ', ()=> {

    let user: UserWithLaptopType & UserWithSkills = {
        name: 'Georgy',
        hair: 32,
        address: {
            city: "Belgrade",
            house: 12
        },
        laptop: {
            title: 'hp'
        },
        books: ['css', 'html', 'js', 'react'],
        skills: [14, 65, 98, 54]
    }
    const userCopy = updateSkills(user, 14, 31);

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).toBe(userCopy.books)
    expect(user.skills).not.toBe(userCopy.skills)
    expect(userCopy.skills[0]).toBe(31)
})


test('remove js book ', ()=> {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Georgy',
        hair: 32,
        address: {
            city: "Belgrade",
            house: 12
        },
        laptop: {
            title: 'hp'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = removeBook(user, 'js');

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})

test('add google to companies', ()=> {

    let user: UserWithLaptopType  & WithCompaniesType  = {
        name: 'Georgy',
        hair: 32,
        address: {
            city: "Belgrade",
            house: 12
        },
        laptop: {
            title: 'hp'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'} ]
    }


    const userCopy = addCompany(user, 'Google')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.companies[2].title).toBe( 'Google')
    expect(user.companies).not.toBe(userCopy.companies)
})




