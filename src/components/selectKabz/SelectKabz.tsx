import React from 'react'
import S from './SelectKabz.module.css'

export type ItemType = {
    title: string,
    value: any
}


type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const SelectKabz = (props: SelectPropsType) => {
    const selectedItem = props.items.find(i => i.value === props.value)

    return (
        <div className={S.select}>
            <select>
                <option value='1'>Moscow</option>
                <option value='2'>Lima</option>
                <option value='3'>London</option>
            </select>
            <h3>{selectedItem && selectedItem.title}</h3>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    )
}

