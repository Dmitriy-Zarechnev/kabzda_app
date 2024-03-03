import type {Meta} from '@storybook/react'
import React, {useEffect, useState} from 'react'


const meta: Meta = {
    title: 'useEffect demo'
    //component: Input
}
export default meta


export const SimpleExample = () => {

    const [counter, setCounter] = useState(1)

    // const changer = (state: number) => {
    //     return state + 1
    // }
    useEffect(() => {
        console.log('UseEffect')
        document.title = counter.toString()
    }, [])


    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <h1>Hello {counter}</h1>
        </>
    )
}


export const TimeOutExample = () => {
    console.log('TimeOutExample')
    const [counter, setCounter] = useState(1)


    useEffect(() => {
        // console.log('UseEffect')
        // setTimeout(() => {
        //     document.title = counter.toString()
        // }, 1000)

        // setInterval(() => {
        //     setCounter(state => state + 1)
        // }, 1000)

    }, [])


    return (
        <>
            {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
            <h1>Hello {counter}</h1>
        </>
    )
}


export const ResetUseEffectExample = () => {

    const [counter, setCounter] = useState(1)


    useEffect(() => {
        console.log('UseEffect render: ' + counter)


        return () => {
            console.log('RESET EFFECT')
        }
    }, [counter])


    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <h1>Hello, counter: {counter}</h1>
        </>
    )
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState('')

    const handlerEvents = (e: KeyboardEvent) => {
        setText(text + e.key)
        console.log(e.key)
    }

    useEffect(() => {
        window.document.addEventListener('keypress', handlerEvents)

        return () => {
            window.document.removeEventListener('keypress', handlerEvents)
        }
    }, [text])


    return (
        <>
            <h1>Hello, text: {text}</h1>
        </>
    )
}