import React from 'react'
import {RatingValueType} from '../../App'

export type RatingPropsType = {
    value: RatingValueType;
    onClick: (value: RatingValueType) => void
};

export const Rating: React.FC<RatingPropsType> = (props) => {

    return (
        <div>
            <Star selected={props.value > 0} onClick={() => props.onClick(1)}/>
            <Star selected={props.value > 1} onClick={() => props.onClick(2)}/>
            <Star selected={props.value > 2} onClick={() => props.onClick(3)}/>
            <Star selected={props.value > 3} onClick={() => props.onClick(4)}/>
            <Star selected={props.value > 4} onClick={() => props.onClick(5)}/>
            <button onClick={() => props.onClick(0)}>Reset</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean;
    onClick: () => void
};

const Star: React.FC<StarPropsType> = (props) => {
    return (
        <span onClick={props.onClick}>
        {props.selected ? <b>Star </b> : 'Star '}
    </span>
    )
}
