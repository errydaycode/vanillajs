import {ManType} from "../05/05_01";




let props: PropsValueType;

beforeEach(()=> {
    props = {
        name: 'Georgii',
        age: 26,
        addresses: [{adress: 453} , {adress: 1703} , {adress: 241}],
        dreams: {
            countries: {
                country: 'USA'
            }
        }
    }
})


test("aa",()=>{
   // const age = props.age
   //const addresses = props.addresses
    const {age, addresses} = props;
    const {country} = props.dreams.countries
    expect(age).toBe(26)
    expect(addresses.length).toBe(3)
    expect(country).toBe('USA')
})

test("bb",()=>{





})