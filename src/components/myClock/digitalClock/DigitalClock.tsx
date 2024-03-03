import React from 'react'
import {ClockUnit} from './clockUnit/ClockUnit'
import S from '../MyClock.module.css'

// ------- Функция для добавления нулей ------------
const addZero = (value: number) => {
    return value < 10 ? `0${value}` : value
}

export const DigitalClock:React.FC< { date: Date }> = React.memo(( {date} ) => {
    return (
        <div className={S.watch_wrapper}>
            <ClockUnit name={'Hours'} value={addZero(date.getHours())}/>
            <div className={S.dots}>:</div>
            <ClockUnit name={'Minutes'} value={addZero(date.getMinutes())}/>
            <div className={S.dots}>:</div>
            <ClockUnit name={'Seconds'} value={addZero(date.getSeconds())}/>
        </div>
    )
})

