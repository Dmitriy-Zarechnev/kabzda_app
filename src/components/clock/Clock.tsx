import React, {useEffect, useState} from 'react'

type ClockPropsType = {}


const addZero = (value: number) => {
    return value < 10 ? `0${value}` : value
}

export const Clock = React.memo((props: ClockPropsType) => {
    const [date, setDate] = useState(new Date())


    useEffect(() => {

        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])


    return (
        <div>
            <span>{addZero(date.getHours())}</span>
            :
            <span>{addZero(date.getMinutes())}</span>
            :
            <span>{addZero(date.getSeconds())}</span>
        </div>
    )
})

