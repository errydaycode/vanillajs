import {useState} from "react";

export type Man2Type={
    name: string
    age: number
    lessons: LessonsType[]
    address : {
        street : {
            title: string
        }
    }
}
type LessonsType={
    title: string
    name?: string
}


type PropsType ={
    title: string
    man: Man2Type
    food: Array<string>
    car : {model: string}
}


export const ManComponent: React.FC<PropsType> = ( {title , man, ...props}) => {

    // const [message, setMessage]= useState<string>('hello')

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {props.car.model}
        </div>
        <div>
            {man.name}
        </div>
    </div>
}