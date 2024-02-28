import type {Meta} from '@storybook/react'
import React, {useEffect, useState} from 'react'
import S from '../../Watch.module.css'


const meta: Meta = {
    title: 'watch demo'
    //component: Watch
}
export default meta
let devHours = new Date().getHours()
let devMinutes = new Date().getMinutes()
let devSeconds = new Date().getSeconds()

export const Watch = () => {

    const [hours, setHours] = useState(devHours)
    const [minutes, setMinutes] = useState(devMinutes)
    const [seconds, setSeconds] = useState(devSeconds)

    // console.log(devSeconds)
    // console.log(new Date().getSeconds())
    // console.log(seconds)

    if (seconds === 60) {
        setSeconds(0)
        setMinutes(state => state + 1)
    }

    if (minutes === 60) {
        setMinutes(0)
        setHours(state => state + 1)
    }

    if (hours === 24) setHours(0)


    useEffect(() => {
        const intervalID = setInterval(() => {
            setSeconds(state => state + 1)
        }, 1000)


        return () => {
            clearInterval(intervalID)
        }
    }, [])


    return (
        <>
            <section className={S.watch}>
                <h1 className={S.header}>Watch Dogs</h1>
                <div className={S.watch_wrapper}>
                    <div className={S.block_box}>
                        <h2 className={S.block_header}>Hours</h2>
                        <div className={S.block_result}>{hours < 10 ? `0${hours}` : hours}</div>
                    </div>
                    <div className={S.dots}>:</div>
                    <div className={S.block_box}>
                        <h2 className={S.block_header}>Minutes</h2>
                        <div className={S.block_result}>{minutes < 10 ? `0${minutes}` : minutes}</div>
                    </div>
                    <div className={S.dots}>:</div>
                    <div className={S.block_box}>
                        <h2 className={S.block_header}>Seconds</h2>
                        <div className={S.block_result}>{seconds < 10 ? `0${seconds}` : seconds}</div>
                    </div>
                </div>
            </section>
        </>
    )
}
