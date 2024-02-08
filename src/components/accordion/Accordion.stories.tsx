import type {Meta} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {Accordion} from './Accordion'
import React, {useState} from 'react'

const meta: Meta<typeof Accordion> = {
    title: 'Accordion',
    component: Accordion
}

export default meta


const onChangeHandler = action('onChange')
const onClickCallBack = action('some item was clicked')

export const CollapsedAccordion = () => {
    return (
        <Accordion titleValue={'Collapsed'}
                   collapsed={true}
                   setAccordionCollapsed={onChangeHandler}
                   items={[]}
                   onClick={onClickCallBack}
        />
    )
}


export const UnCollapsedAccordion = () => {
    return (
        <Accordion titleValue={'UnCollapsed'}
                   collapsed={false}
                   setAccordionCollapsed={() => {
                   }}
                   items={[{title: 'Valera', value: 1}, {title: 'Sam', value: 2}, {title: 'Bob', value: 3}, {title: 'Dimych', value: 4}]}
                   onClick={onClickCallBack}
        />
    )
}


export const StoryAccordion = () => {
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return (
        <Accordion titleValue={'UnCollapsed'}
                   collapsed={accordionCollapsed}
                   setAccordionCollapsed={() => {
                       setAccordionCollapsed(!accordionCollapsed)
                   }}
                   items={[{title: 'Valera', value: 1}, {title: 'Sam', value: 2}, {title: 'Bob', value: 3}, {title: 'Dimych', value: 4}]}
                   onClick={onClickCallBack}
        />
    )
}
