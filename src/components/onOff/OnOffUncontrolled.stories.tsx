import type {Meta} from '@storybook/react'
import {OnOffUncontrolled} from './OnOffUncontrolled'
import React from 'react'
import {action} from '@storybook/addon-actions'



const meta: Meta<typeof OnOffUncontrolled> = {
    title: 'OnOff',
    component: OnOffUncontrolled
}
export default meta

const callback = action('hello')

export const ChangeOnUnControlled = () => {
    return <OnOffUncontrolled defaultOn={true} onChange={callback}/>
}

export const ChangeOffUnControlled = () => {
    return <OnOffUncontrolled defaultOn={false} onChange={callback}/>
}

