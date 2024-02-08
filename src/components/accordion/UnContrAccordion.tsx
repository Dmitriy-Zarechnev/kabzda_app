import React, {useState} from 'react'

type AccordionPropsType = {
    titleValue: string;
};

type AccordionTitlePropsType = {
    title: string;
    onClickCollapsedHandler: () => void
}

export const UnContrAccordion: React.FC<AccordionPropsType> = (props) => {

    const [collapsed, setCollapsed] = useState(true)

    const onClickCollapsedHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClickCollapsedHandler={onClickCollapsedHandler}/>
            {collapsed && <AccordionBody/>}
        </div>
    )
}


const AccordionTitle: React.FC<AccordionTitlePropsType> = (props) => {
    return <h3 onClick={props.onClickCollapsedHandler}>{props.title}</h3>
}

const AccordionBody: React.FC = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}


