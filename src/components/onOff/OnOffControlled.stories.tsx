import type {Meta} from '@storybook/react'
import {OnOffControlled} from './OnOffControlled'
import React, {useState} from 'react'
import {action} from '@storybook/addon-actions'


const meta: Meta<typeof OnOffControlled> = {
    title: 'OnOff',
    component: OnOffControlled
}
export default meta


const callBack =
    action('on or off clicked')


export const OnOffControlledGreen = () => {
    return <OnOffControlled changeColor={true} setChangeColor={callBack}/>
}

export const OnOffControlledRed = () => {
    return <OnOffControlled changeColor={false} setChangeColor={() => {
    }}/>
}


export const ChangeOnOffControlled = () => {
    const [changeColor, setChangeColor] = useState<boolean>(true)
    return <OnOffControlled changeColor={changeColor} setChangeColor={setChangeColor}/>
}


