import type {Meta} from '@storybook/react'
import React, {useState} from 'react'


const meta: Meta = {
    title: 'React.memo demo'
    //component: Input
}
export default meta


const NewMessagesCounter = (props: { count: number }) => {
    return (
        <div>{props.count}</div>
    )
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret')
    return (
        <div>
            {props.users.map((el, i) => {
                return <div key={i}>{el}</div>
            })}
        </div>
    )
}

const Users = React.memo(UsersSecret)


export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Bob', 'Sam', 'Dan', 'Man'])
    console.log(users)

    const onClick = () => {
        setCounter(counter + 1)
    }

    const addUser = () => {
        setUsers([...users, 'bro'])
    }


    return (
        <>
            <button onClick={onClick}>
                +
            </button>

            <button onClick={addUser}>
                add user
            </button>

            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}