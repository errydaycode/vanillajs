export type UsersType = {
    [key: string] : {id: number, name: string}
}

 let users: UsersType

beforeEach( () => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '53321': {id: 53321, name: 'Natasha'},
        '1121': {id: 1121, name: 'Valera'},
        '1': {id: 1, name: 'Katya'}
    }
} )

test("should update corresponding user", ()=> {

    users['1'].name = 'Ekaterina'

    expect(users['1']).toStrictEqual({id: 1, name: 'Ekaterina'})


})

test("should delete corresponding user", ()=> {

    delete users['1']

    expect(users['1']).toBeUndefined()


})


