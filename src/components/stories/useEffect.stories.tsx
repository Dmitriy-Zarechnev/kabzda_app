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
    }, [])


    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <h1>Hello {counter}</h1>
        </>
    )
}

