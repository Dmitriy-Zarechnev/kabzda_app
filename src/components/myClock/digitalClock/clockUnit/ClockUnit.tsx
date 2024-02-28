import React from 'react'
import S from './ClockUnit.module.css'

type ClockUnitPropsType = {
    name: string
    value: number | string
}

export const ClockUnit = React.memo((props: ClockUnitPropsType) => {
    return (
        <div className={S.block_box}>
            <h2 className={S.block_header}>{props.name}</h2>
            <div className={S.block_result}>{props.value}</div>
        </div>
    )
})
