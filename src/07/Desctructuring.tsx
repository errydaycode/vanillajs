import React, {useState} from 'react';

export type PropsValueType={
    name: string
    age: number
    addresses: Array<{adress: string; street?: string}>
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

function myUseState (m: string) {
    return [m, function () {}]
}
function myUseState1 (m: string) {
    return {message: "m",
        setMessage: function () {}
    }
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {

      const [message, setMessage] = myUseState('hello')

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

