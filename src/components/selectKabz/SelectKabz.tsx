import React, {useState} from 'react'
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
    const [active, setActive] = useState<boolean>(false)

    const toggleItems = () => {
        setActive(!active)
    }
    const itemClicked = () => {

    }
    const selectedItem = props.items.find(i => i.value === props.value)

    return (
        <div className={`${S.select}`}>
            <h3 className={S.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</h3>
            {active && <div className={S.items}>
                {props.items.map(i => {
                    return (
                        <div key={i.value}
                             onClick={itemClicked}
                        >
                            {i.title}
                        </div>
                    )
                })}
            </div>
            }
        </div>
    )
}

