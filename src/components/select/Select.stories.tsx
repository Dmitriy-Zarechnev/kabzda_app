import type {Meta} from '@storybook/react'
import {Select} from './Select'
import {useState} from 'react'
import {action} from '@storybook/addon-actions'


const meta: Meta<typeof Select> = {
    title: 'Select',
    component: Select
}

export default meta


export const CheckedSelect = () => {

    const items = [{title: '2B', value: 1}, {title: '9S', value: 2}, {title: 'A2', value: 3}, {title: 'D7', value: 4}]

    const defaultTitleData = items[0]

    const [currentTitle, setCurrentTitle] = useState<string>(defaultTitleData.title)
    const [onFocus, setOnFocus] = useState<boolean>(false)
    const [selectedValue, setSelectedValue] = useState<any>(null)

    const onClickFunc = (value: any, title: string) => {
        setSelectedValue(value)
        setOnFocus(!onFocus)
        setCurrentTitle(title)
    }

    return (
        <Select
            onFocus={onFocus}
            currentTitle={currentTitle}
            selectedValue={selectedValue}
            defaultTitleData={defaultTitleData}
            onClick={onClickFunc}
            items={items}
        />
    )
}


export const OpenSelect = () => {

    const items = [{title: '2B', value: 1}, {title: '9S', value: 2}, {title: 'A2', value: 3}, {title: 'D7', value: 4}]

    const defaultTitleData = items[0]

    const [currentTitle, setCurrentTitle] = useState<string>(defaultTitleData.title)
    const [onFocus, setOnFocus] = useState<boolean>(true)
    const [selectedValue, setSelectedValue] = useState<any>(null)

    const onClickFunc = action('hello')

    return (
        <Select
            onFocus={onFocus}
            currentTitle={currentTitle}
            selectedValue={selectedValue}
            defaultTitleData={defaultTitleData}
            onClick={onClickFunc}
            items={items}
        />
    )
}


export const ClosedSelect = () => {

    const items = [{title: '2B', value: 1}, {title: '9S', value: 2}, {title: 'A2', value: 3}, {title: 'D7', value: 4}]

    const defaultTitleData = items[0]

    const [currentTitle, setCurrentTitle] = useState<string>(defaultTitleData.title)
    const [onFocus, setOnFocus] = useState<boolean>(false)
    const [selectedValue, setSelectedValue] = useState<any>(null)

    const onClickFunc = action('Good By')

    return (
        <Select
            onFocus={onFocus}
            currentTitle={currentTitle}
            selectedValue={selectedValue}
            defaultTitleData={defaultTitleData}
            onClick={onClickFunc}
            items={items}
        />
    )
}

