import React, {CSSProperties} from 'react'

export const AnalogClock:React.FC<{ date: Date }> = React.memo(( { date }) => {


// -----------  Свойства для часиков ----------
    const secondsArrow: CSSProperties = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '200px',
        borderBottom: '4px solid black',
        transformOrigin: '0 0',
        transform: `rotate(${(date.getSeconds() * 6) - 90}deg) translate(0, -50%)`,
        display: 'block',
        borderRadius: '5px'
    }
    const minutesArrow: CSSProperties = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '150px',
        borderBottom: '6px solid red',
        transformOrigin: '0 0',
        transform: `rotate(${(date.getMinutes() * 6) - 90}deg) translate(0, -50%)`,
        display: 'block',
        borderRadius: '5px'
    }
    const hoursArrow: CSSProperties = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100px',
        borderBottom: '10px solid green',
        transformOrigin: '0 0',
        transform: `rotate(${(date.getHours() * 30) - 90}deg) translate(0, -50%)`,
        display: 'block',
        borderRadius: '5px'
    }
    const wrapper: CSSProperties = {
        position: 'relative',
        borderRadius: '50%',
        border: '5px solid pink',
        width: '450px',
        height: '450px'
    }

    return (
        <div style={wrapper}>
            <span style={secondsArrow}></span>
            <span style={minutesArrow}></span>
            <span style={hoursArrow}></span>
        </div>
    )
})

