import {ManType} from "../05/05_01";
import {PropsValueType} from "./Desctructuring";




let props: PropsValueType;

beforeEach(()=> {
    props = {
        name: 'Georgii',
        age: 26,
        addresses: [ {adress: "1703"} , {adress: "241"} , {adress: "453" , street: 'berezovaya'} ],
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

/*const ad1 = props.addresses[0]
const ad2 = props.addresses[1]*/


    const [,add1 ,...restAdd] = props.addresses


/*
    expect(ad1.adress).toBe("1703")
    expect(ad2.adress).toBe("241")*/
    expect(restAdd.length).toBe(1)
    /*expect(restAdd[0].adress).toBe('241')*/
    expect(restAdd[0].street).toBe('berezovaya')
    expect(restAdd[0]).toStrictEqual({adress: "453" , street: 'berezovaya'})

    /*expect(add.adress).toBe("1703")*/




})