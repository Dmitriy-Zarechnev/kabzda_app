import type {Meta} from '@storybook/react'
import React from 'react'
import {UnContrAccordion} from './UnContrAccordion'

const meta: Meta<typeof UnContrAccordion> = {
    title: 'UnContrAccordion',
    component: UnContrAccordion
}

export default meta

export const StoryAccordion = () => {
    return <UnContrAccordion titleValue={'UnCollapsed'}/>
}
