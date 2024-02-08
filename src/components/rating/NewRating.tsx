import React, {useState} from 'react'
import {RatingValueType} from '../../App'

type StarPropsType = {
    selected: boolean;
    onClickRatingHandler: () => void
};


type NewRatingPropsType = {
    defaultValue?: RatingValueType
}

export const NewRating = (props: NewRatingPropsType) => {

    const [rating, setRating] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    const onClickRatingHandler = (value: RatingValueType) => {
        setRating(value)
    }

    return (
        <div>
            <Star selected={rating > 0} onClickRatingHandler={() => onClickRatingHandler(1)}/>
            <Star selected={rating > 1} onClickRatingHandler={() => onClickRatingHandler(2)}/>
            <Star selected={rating > 2} onClickRatingHandler={() => onClickRatingHandler(3)}/>
            <Star selected={rating > 3} onClickRatingHandler={() => onClickRatingHandler(4)}/>
            <Star selected={rating > 4} onClickRatingHandler={() => onClickRatingHandler(5)}/>
            <button onClick={() => onClickRatingHandler(0)}>Reset</button>
        </div>
    )
}

const Star: React.FC<StarPropsType> = (props) => {
    return <span onClick={props.onClickRatingHandler}>
        {props.selected ? <b>Star </b> : 'Star '}
    </span>


}
