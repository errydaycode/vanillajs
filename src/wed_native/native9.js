// лексическое окружение, замыкание, рекурсия
// globalLE{} -> null

// На верхнем уровне, когда мы запускаем нашу программку ( наш скрипт стартует) создается внешний scope, или Лексическое Окружение
// global Lexical Environment (это некий объект) . По мере создания переменных, функций  и тд, на глобальном уровне, все они
// заносятся в этот объект. {} поэтому когда мы работаем в глобальном окружении, мы просто работаем с ключами этого объекта.


const globalLexicalEnvironment = {
    environmentVariables: {

    },

    outer: null
}

// Объект глобального лексического окружения содержит в себе два основных св-ва : environmentVariables, куда записываются
// все наши переменные. Так же в этои объекте есть св-во outer: null; это ссылка на внешнее Глобальное окружение, так как
// у нас это и есть глобальное окружение, то выше него ничего нет, соответственно в этом объекте эта ссылка равна null;
// Важно запомнить, что в объекте  глобального лексического окружения ссылка на внешнее окружение равна null;



//globalLE{} -> null


// Hosting - функция, объявленная синтаксисом function declaration сразу же попадает в globalLE, так как она подлежит
// всплытию (хостингу), т.е. попадает вверх лексического окружения до того, как код дойдет но неё.
// Хостингу так же подлежат переменные, написаные с помощью var, однако если мы захотим обратиться к ней до объявления,
// то увидим undefined, а вот функцию, подлежащую хостингом, мы можем вызвать до объявления

let car = 'bmw' //globalLE{ car: 'bmw', startEngine: Function  } -> null

function startEngine() { //globalLE{ car: 'bmw', startEngine: Function  } -> null
    // outer: globalLE // когда ф-ия инициализируется, внутри неё создается ссылка на внешнее лексическое окружение,
    // в данном случае на globalLE ( в иных случаях на то окружение, где она была проиницализирована)
    // startEngineLE: {} - на момент старта выполнения в ней создается её внутренний объект  лексического окружения - на момент старта это чистый объект
    const car = 'kia rio'; //startEngineLE: {car: 'kia rio'}
    console.log(`Start ${car}`)
}

const obj = {} // объект не создает лексического окружения. ЛЕ создают все блоки кода - ф-ии, циклы, иф-ы, но не объект

startEngine()
car = 'audi'; //globalLE{ car: 'audi', startEngine: Function  } -> null

startEngine() // globalLE{ car: 'audi', startEngine: Function }


// gLE{}

const a = 10; // gLE{foo: Func, foo2: Func, a: 10}
const b = 20; // gLE{ foo: Func, foo2: Func, a: 10, b: 20}
const c= 50; // gLE{ foo: Func, foo2: Func, a: 10, b: 20}

function foo() {
    // {} -> gLE
    // foo2LE -> {a: 30, b:40, bar: Func}
    const a = 30;
    const b = 40;
    console.log(a)
    foo2()
    const bar = () => {
        // {}-> foo2LE
        console.log(c)
    }
    bar()
}

foo()


function foo2() {
    //foo2LE-> {}
    console.log(b)
}

// Замыкание - св-во ф-ии запомнить свое лексическое окружение
// Ф-ия запоминает момент инициализации, то место где она проинициализирована, а не где она вызвана ( создает ссылку на то внешнее ЛЕ, в котором была инициализация)
// на момент инициализации ф-ии будет внутри создаваться ссылка на внешнее LE
// на момент вызова будет создаваться внутреннее LE


// globaLE {}-> null
const counterCreator = () => { // globaLE {counterCreator: Func}-> null
    // counterCreatorLE {}-> globalLE
    let count = 0; //counterCreatorLE {count: 0}-> globalLE

    return ()=> {
        //noNameLE {}-> counterCreatorLE
        // let count = 0;
        console.log(++ count)
    }
}

const counter = counterCreator()

const counter2 = counterCreator()



counter()
counter()
counter()


counter2()
counter2()
counter2()