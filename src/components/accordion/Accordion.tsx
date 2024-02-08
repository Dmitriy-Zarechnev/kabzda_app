import React from 'react'

export type ItemType = {
    title: string,
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: (collapsed: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
};

export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => props.setAccordionCollapsed(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}


// -----------------------------------------------------------------------------
type AccordionTitlePropsType = {
    title: string;
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={props.onClick}>
            {props.title}
        </h3>
    )
}

// -----------------------------------------------------------------------------
type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <ul>
            {props.items.map((el, i) => {
                return (
                    <li onClick={() => {
                        props.onClick(el.value)
                    }} key={i}>
                        {el.title}
                    </li>
                )
            })}
        </ul>
    )
}


