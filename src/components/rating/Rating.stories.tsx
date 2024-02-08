import type {Meta} from '@storybook/react'
import {Rating} from './Rating'
import React, {useState} from 'react'
import {RatingValueType} from '../../App'


const meta: Meta<typeof Rating> = {
    title: 'Rating',
    component: Rating
}
export default meta

export const EmptyStar = () => {
    return <Rating value={0} onClick={()=>{}}/>
}

export const Rating1 = () => {
    return <Rating value={1} onClick={()=>{}}/>
}

export const Rating2 = () => {
    return <Rating value={2} onClick={()=>{}}/>
}
export const Rating3 = () => {
    return <Rating value={3} onClick={()=>{}}/>
}
export const Rating4 = () => {
    return <Rating value={4} onClick={()=>{}}/>
}
export const Rating5 = () => {
    return <Rating value={5} onClick={()=>{}}/>
}

export const ChangeRating = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    return <Rating value={ratingValue} onClick={setRatingValue}/>
}