import type {Meta} from '@storybook/react'
import React, {useState} from 'react'


const meta: Meta = {
    title: 'useState demo'
    //component: Input
}
export default meta

function generateData() {
    console.log('generate')
    return 32356768563
}

export const Example = () => {
    console.log('Example')
    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => {
        return state + 1
    }

    return (
        <>
            <button onClick={() => setCounter(changer)}>+</button>
            <h1>{counter}</h1>
        </>
    )
}

