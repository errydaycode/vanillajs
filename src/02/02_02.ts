
export type StType={
    title: string
}

type AddressType={
    number?: number
    street: StType
}

export type HouseType={
    buildedAt: number
    repaired: boolean
    address: AddressType
}



export type governmentBuildings ={
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}


export type CityType={
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<governmentBuildings>
    citizensNumber: number
}