import type {Meta} from '@storybook/react'
import React from 'react'
import {MyClock} from '../myClock/MyClock'


const meta: Meta = {
    title: 'watch demo'
    //component: Watch
}
export default meta


export const Watch = () => {

    return <MyClock/>
}
