import type {Meta} from '@storybook/react'
import {MyClock} from './MyClock'
import {ClockUnit} from './digitalClock/clockUnit/ClockUnit'


const meta: Meta = {
    title: 'MyClock demo',
    component: MyClock
}
export default meta

export const MyClockDemo = () => {
    return (
        <MyClock/>
    )
}

export const MyClockUnitDemo = () => {
    return (
        <ClockUnit name={'Time'} value={40}/>
    )
}