import {StudentType} from "../02/02";
import {CityType, governmentBuildings, HouseType} from "../02/02_02";

const sum =(a: number, b: number)=> {
    return a+b
}
function sum2 (a: number, b: number) {
    return a+b
}


const res = sum( sum(1,2), sum(6,10)  )



export function addSkill(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const addSkill2 =(student: StudentType, skill: string)=> {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive (s:StudentType) {
    s.isActive = true;
}

export const doesStudentLivesInCity =(s: StudentType, city: string)=> {
    return s.address.city.title === city
}

export const addMoneyToBudget = (building: governmentBuildings, budget: number)=> {
    building.budget += budget
}

export const repairHouse = (houseType: HouseType)=> {

    houseType.repaired = true;

}

export const toFireStaff = (building: governmentBuildings, staff: number)=> {
        building.staffCount -= staff
}

export const toHireStaff = (building: governmentBuildings, staff: number)=> {
    building.staffCount += staff
}

export const createMessage =(props: CityType)=> {
    return `Hello ${props.title} citizens. I want you to be Happy. All ${props.citizensNumber} men`
}