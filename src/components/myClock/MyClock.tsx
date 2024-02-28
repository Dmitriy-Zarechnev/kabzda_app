import React, {useEffect, useState} from 'react'
import S from './MyClock.module.css'
import {AnalogClock} from './analogClock/AnalogClock'
import {DigitalClock} from './digitalClock/DigitalClock'


export const MyClock = React.memo(() => {

    const [date, setDate] = useState<Date>(new Date())


    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)


        return () => {
            clearInterval(intervalID)
        }
    }, [])


    return (
        <section className={S.watch}>
            <h1 className={S.header}>Watch Dogs</h1>
            <DigitalClock date={date}/>
            <AnalogClock date={date}/>
        </section>
    )
})

