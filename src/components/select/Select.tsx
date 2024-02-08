import React from 'react'

export type ItemType = {
    title: string,
    value: any
}

type SelectPropsType = {
    onFocus: boolean,
    currentTitle: string,
    selectedValue: string
    defaultTitleData: ItemType
    onClick: (value: any, title: string) => void
    items: ItemType[]
}


export const Select = (props: SelectPropsType) => {

    return (
        <div className="select">
            {props.onFocus
                ? props.items.map(el => {
                    return (
                        <div className={'span hover'} key={el.value} onClick={() => props.onClick(el.value, el.title)}>{el.title}</div>
                    )
                })
                :
                <>{props.selectedValue
                    ? props.items.filter(e => e.value === props.selectedValue).map(el => {
                        return (
                            <div className={'span'} onClick={() => props.onClick(el.value, el.title)} key={el.value}>{el.title}</div>
                        )
                    })
                    : <div className={'span'} onClick={() => props.onClick(props.defaultTitleData.value, props.defaultTitleData.title)}>{props.currentTitle}</div>
                }
                </>
            }
        </div>
    )
}


