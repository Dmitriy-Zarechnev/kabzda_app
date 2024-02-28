import type {Meta} from '@storybook/react'
import {Clock} from './Clock'


const meta: Meta = {
    title: 'Clock demo',
    component: Clock
}
export default meta

export const ClockDemo = () => {
    return (
        <Clock/>
    )
}
