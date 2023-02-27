import React from 'react';

export type PropsValueType={
    name: string
    age: number
    addresses: Array<{adress: number}>
    dreams: {
        countries: {
            country: string
        }
    }
}

type PropsType = {
    title: string
    man: PropsValueType
    food: Array<string>
    car : {model: string}
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {



    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {props.car.model}
            </div>
            <div>
                {man.name}
            </div>
        </div>
    );
};

