import React, {useState} from 'react'


export const OnOffUncontrolled: React.FC<{ onChange: (changeColor: boolean) => void,defaultOn?:boolean }> = (props) => {

    const [on, setOn] = useState(props.defaultOn)

    const wrapper = {
        padding: '20px',
        display: 'flex'
    }

    const onStyle = {
        width: '50px',
        height: '50px',
        fontSize: '30px',
        border: '2px solid',
        borderColor: on ? 'green' : 'black',
        marginRight: '10px',
        backgroundColor: on ? 'green' : 'white',
        color: on ? 'red' : 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    }

    const offStyle = {
        width: '50px',
        height: '50px',
        fontSize: '30px',
        border: '2px solid ',
        borderColor: on ? 'black' : 'red',
        marginRight: '10px',
        backgroundColor: on ? 'white' : 'red',
        color: on ? 'black' : 'green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    }

    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid',
        borderColor: on ? 'green' : 'red',
        backgroundColor: on ? 'green' : 'red',
        alignSelf: 'center'
    }

    const Clicked = (value: boolean) => {
        setOn(value)
        props.onChange(value)
    }


    return (
        <div style={wrapper}>

            <div style={onStyle}
                 onClick={() => Clicked(true)}>
                On
            </div>

            <div style={offStyle}
                 onClick={() => Clicked(false)}>
                Off
            </div>

            <div style={indicatorStyle}></div>
        </div>
    )
}



