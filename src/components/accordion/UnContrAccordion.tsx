import React, {useReducer} from 'react'
import {reducer} from './Reducer'

type AccordionPropsType = {
    titleValue: string;
};

type AccordionTitlePropsType = {
    title: string;
    onClickCollapsedHandler: () => void
}


export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'


export const UnContrAccordion: React.FC<AccordionPropsType> = (props) => {

    // const [collapsed, setCollapsed] = useState(true)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    /*const onClickCollapsedHandler = () => {
        setCollapsed(!collapsed)
    }
     */

    const onClickCollapsedHandler = () => {
        dispatch({type: 'TOGGLE-COLLAPSED'})
    }


    return (
        <div>
            <AccordionTitle title={props.titleValue} onClickCollapsedHandler={onClickCollapsedHandler}/>
            {state.collapsed && <AccordionBody/>}
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


