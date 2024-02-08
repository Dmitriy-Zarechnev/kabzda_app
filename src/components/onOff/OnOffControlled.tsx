import React from 'react'

type OnOffControlledPropsType = {
    changeColor: boolean
    setChangeColor: (changeColor: boolean) => void
}

export const OnOffControlled: React.FC<OnOffControlledPropsType> = ({changeColor, setChangeColor}) => {

    // const [on, setOn] = useState(false)

    const wrapper = {
        padding: '20px',
        display: 'flex'
    }

    const onStyle = {
        width: '50px',
        height: '50px',
        fontSize: '30px',
        border: '2px solid',
        borderColor: changeColor ? 'green' : 'black',
        marginRight: '10px',
        backgroundColor: changeColor ? 'green' : 'white',
        color: changeColor ? 'red' : 'black',
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
        borderColor: changeColor ? 'black' : 'red',
        marginRight: '10px',
        backgroundColor: changeColor ? 'white' : 'red',
        color: changeColor ? 'black' : 'green',
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
        borderColor: changeColor ? 'green' : 'red',
        backgroundColor: changeColor ? 'green' : 'red',
        alignSelf: 'center'
    }


    return (
        <div style={wrapper}>

            <div style={onStyle}
                 onClick={() => {
                     setChangeColor(true)
                 }}>
                On
            </div>

            <div style={offStyle}
                 onClick={() => {
                     setChangeColor(false)
                 }}>
                Off
            </div>

            <div style={indicatorStyle}></div>
        </div>
    )
}



