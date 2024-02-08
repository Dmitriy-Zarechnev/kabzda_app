import React, {useState, KeyboardEvent, useEffect} from 'react'
import S from './SelectKabz.module.css'
import {log} from 'node:util'
import {Simulate} from 'react-dom/test-utils'
import keyDown = Simulate.keyDown

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
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClicked = (value: any) => {
        props.onChange(value)
        toggleItems()
    }


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentItem = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentItem) {
                        props.onChange(pretendentItem.value)
                    }
                    return
                }
            }
            props.onChange(props.items[0].value)
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }


    return (
        <div className={`${S.select}`} onKeyUp={onKeyUp} tabIndex={0}>
            <h3 className={S.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</h3>
            {active && <div className={S.items}>
                {props.items.map(i => {
                    return (
                        <div key={i.value}
                             onMouseEnter={() => {
                                 setHoveredElementValue(i.value)
                             }}
                             className={`${S.item} ${hoveredItem === i ? S.selected : ''}`}
                             onClick={() => {
                                 onItemClicked(i.value)
                             }}>
                            {i.title}
                        </div>
                    )
                })}
            </div>
            }
        </div>
    )
}

