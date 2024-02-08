import type {Meta} from '@storybook/react'
import {NewRating} from './NewRating'
import React from 'react'


const meta: Meta<typeof NewRating> = {
    title: 'NewRating',
    component: NewRating
}
export default meta


export const NewEmptyStar = () => {
    return <NewRating defaultValue={0}/>
}

export const NewRating1 = () => {
    return <NewRating defaultValue={1}/>
}

export const NewRating2 = () => {
    return <NewRating defaultValue={2}/>
}
export const NewRating3 = () => {
    return <NewRating defaultValue={3}/>
}
export const NewRating4 = () => {
    return <NewRating defaultValue={4}/>
}
export const NewRating5 = () => {
    return <NewRating defaultValue={5}/>
}