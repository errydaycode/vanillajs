
function increaseAge(u: UserType) {
    u.age++;
}

type UserType={
    name: string
    age: number
    address: {
        city: string
    }
}




test('reference type test', ()=> {

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            city: "Zelenograd"
        }
    }

    increaseAge(user);

    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000;

    expect(user.age).toBe(1000)


})

test('array reference test', ()=> {

    let users =[
        {
        name: 'Dimych',
        age: 32
        },
        {
            name: 'Gera',
            age: 26
        }

    ]

    let admins = users

    admins.push({name:'Kirill', age: 28})

    expect(users[2]).toEqual({name:'Kirill', age: 28})



})

test('value type test', ()=> {

   let usersCount = 100;

    let adminsCount = usersCount

    adminsCount = adminsCount + 1



    expect(usersCount).toEqual(100)
    expect(adminsCount).toEqual(101)



})

test('reference2 type test', ()=> {

    const address = {
        city: 'Minsk'
    }

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

   //let addr = user.address



   let user2 : UserType ={
        name: 'Natasha',
       age: 30,
       address : address
   }

   user2.address.city = 'NY'

    expect(user.address.city).toBe('NY')
    expect(user.address).toEqual(user2.address)


})

test('reference array type test', ()=> {

    const address = {
        city: 'Minsk'
    }

    let user: UserType = {
        name: 'Dimych',
        age: 32,
        address: address
    }
    let user2 : UserType ={
        name: 'Natasha',
        age: 30,
        address : address
    }

    const users = [user, user2, {name: 'Katya', age: 23, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Dmitry'

    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')


})


test('sort array test', ()=> {

    const letters = ['c', 'd', 'a', 'z', 'e']

    changeFunc(letters)


    expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])
})


function changeFunc(letters: any) {
   const copy =   [...letters].sort()
    console.log(copy)
}

