import type {Meta} from '@storybook/react'
import React, {ChangeEvent, useRef, useState} from 'react'


const meta: Meta = {
    title: 'input'
    //component: Input
}
export default meta

// Неконтролируемый input
export const UncontrolledInput = () => {
    return <input/>
}

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

    return (
        <>
            <input onChange={onChangeValue}/> - {value}
        </>
    )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)


    const onClickSave = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={onClickSave}>Save</button>
            - actual value {value}
        </>
    )
}


// Контролируемый input
export const ControlledInputWithFixedValue = () => {
    return <input value={'Control'}/>
}

export const ControlledInput = () => {
    const [parentValue, setValue] = useState('')

    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <>
            <input value={parentValue} onChange={onChangeInputValue}/> - {parentValue}
        </>
    )
}

export const ControlledCheckBox = () => {
    const [parentValue, setValue] = useState(true)

    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }

    return (
        <>
            <input type={'checkbox'} checked={parentValue} onChange={onChangeInputValue}/>
        </>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setValue] = useState<string | undefined>('2')

    const onChangeInputValue = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <select value={parentValue} onChange={onChangeInputValue}>
            <option>one</option>
            <option value={'1'}>Obninsk</option>
            <option value={'2'}>Lima</option>
            <option value={'3'}>Minsk</option>
        </select>
    )
}

