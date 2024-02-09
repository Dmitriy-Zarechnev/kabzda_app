import React, {useState} from 'react'
import S from './App.module.css'
import {Select} from './components/select/Select'
import {UnContrAccordion} from './components/accordion/UnContrAccordion'


export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    // let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
     // let [changeColor, setChangeColor] = useState<boolean>(true)

    // const items = [
    //     {title: '2B', value: 1},
    //     {title: '9S', value: 2},
    //     {title: 'A2', value: 3},
    //     {title: 'D7', value: 4}
    // ]
    //
    // const defaultTitleData = items[0]

    // const [currentTitle, setCurrentTitle] = useState<string>(defaultTitleData.title)
    // const [onFocus, setOnFocus] = useState<boolean>(false)
    // const [selectedValue, setSelectedValue] = useState<any>(null)
    //
    // const onClickFunc = (value: any, title: string) => {
    //     setSelectedValue(value)
    //     setOnFocus(!onFocus)
    //     setCurrentTitle(title)
    // }

    return (
        <div className={S.app}>
            <PageTitle title={'This is Kabzda'}/>

            {/*<Select*/}
            {/*    onFocus={onFocus}*/}
            {/*    currentTitle={currentTitle}*/}
            {/*    selectedValue={selectedValue}*/}
            {/*    defaultTitleData={defaultTitleData}*/}
            {/*    onClick={onClickFunc}*/}
            {/*    items={items}*/}
            {/*/>*/}

            {/*<OnOffUncontrolled onChange={setChangeColor}/> {changeColor.toString()}*/}
            {/*<OnOffControlled changeColor={changeColor} setChangeColor={setChangeColor}/>*/}

            {/*<Accordion titleValue={'Users title'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           setAccordionCollapsed={setAccordionCollapsed}*/}
            {/*           items={[{title: 'Valera', value: 1}, {title: 'Sam', value: 2}, {title: 'Bob', value: 3}, {title: 'Dimych', value: 4}]}*/}
            {/*           onClick={()=>{*/}
            {/*               console.log('some item was clicked')}}*/}
            {/*/>*/}


            <UnContrAccordion titleValue={'Test Accordion'}/>
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<NewRating/>*/}
        </div>
    )
}

type PageTitlePropsType = {
    title: string;
};

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App
