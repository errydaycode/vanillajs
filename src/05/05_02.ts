import {governmentBuildings, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: governmentBuildings[]) => {
   return buildings.map(b => b.address.street.title)
 }

export const getStreetsTitlesOfHouses = (h: HouseType[]) => {
    return h.map(b => b.address.street.title)
}

export const createMessage22 = (houses: Array<HouseType>) => {
    return houses.map(h=> `Hello gyus from ${h.address.street.title}`)
}