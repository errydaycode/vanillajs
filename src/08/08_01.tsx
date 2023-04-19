// Ассоциативный массив JavaScript - это объект. Структура данных. Не тип данных.
// Обычный массив - тоже струтура данных. В JS нет типа данных - Массив. Массив - это структура данных. Организация данных.
// Сам по себе массив является объектом, тк у него есть методы, свойства. Асс. Массив это просто объект, но объект это тип данных, но сейчас мы будем к нему относиться
// как к организационной структуре, поэтому будем называть его Ассоциативный Массив. Хотя по факту это просто объект


// export const usersArray = ['Dimych', 'Natasha', 'Valera', 'Katya']

export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

export type UsersType = {
    [key: string] : {id: number, name: string}
}

export const users4: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '53321': {id: 53321, name: 'Natasha'},
    '1121': {id: 1121, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}

// users[1]

let user16 = {id: 100500, name: "Igor"}

users4[user16.id] = user16
delete users4[user16.id]
users4[user16.id].name = 'Viktor'

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 53321, name: 'Natasha'},
    {id: 1121, name: 'Valera'},
    {id: 1, name: 'Katya'}
]


// usersArray.find(u => u.id === 1) - доставать

// let usersCopy = [...usersArray.filter(el => el.id !== user16.id), user] // добавление пользователя

// var usersArray = usersArray.filter(u => u.id !== user.id)