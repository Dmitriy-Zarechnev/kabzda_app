import React, {useEffect, useState} from 'react'
import S from './MyClock.module.css'
import {AnalogClock} from './analogClock/AnalogClock'
import {DigitalClock} from './digitalClock/DigitalClock'

type clockModeType = 'analog' | 'digit' | 'default'

export const MyClock = React.memo(() => {
    const [date, setDate] = useState<Date>(new Date())
    const [clockType, setClockType] = useState<clockModeType>('default')


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
            <button onClick={() => setClockType('analog')}>Analog</button>
            <button onClick={() => setClockType('digit')}>Digit</button>
            {clockType === 'analog'
                ? <AnalogClock date={date}/>
                : clockType === 'digit'
                    ? <DigitalClock date={date}/>
                    : '👻'}
        </section>
    )
})

