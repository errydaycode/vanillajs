import {CityType, governmentBuildings} from "../02/02_02";

export  const demolishHousesOnTheStreet = (city: CityType, street: string)=> {
    city.houses = city.houses.filter(t=> t.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen =(buildings: Array<governmentBuildings>, number: number)=> {
    return buildings.filter( b => b.staffCount > number)
}