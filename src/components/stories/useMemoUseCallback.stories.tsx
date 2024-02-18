import type {Meta} from '@storybook/react'
import React, {useCallback, useMemo, useState} from 'react'


const meta: Meta = {
    title: 'useMemo demo'
    //component: Input
}
export default meta


export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>
                Result for a:{resultA}
            </div>
            <div>
                Result for b:{resultB}
            </div>
        </>
    )
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users Secret')
    return (
        <div>
            {props.users.map((el, i) => {
                return <div key={i}>{el}</div>
            })}
        </div>
    )
}

const Users = React.memo(UsersSecret)


export const HelpsForReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Bob', 'Sam', 'Dan', 'Man'])

    const newArray = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        setUsers([...users, 'bra'])
    }

    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>
                +
            </button>

            <button onClick={addUser}>
                add user
            </button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}


export const LikeUseCallBack = () => {
    console.log('LikeUseCallBack')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['JS', 'React', 'Redux', 'Vue'])

    const newArray = useMemo(() => {
        return books.filter(el => el.toLowerCase().indexOf('e') > -1)
    }, [books])

    const addBook = () => {
        setBooks([...books, 'TeS'])
    }

    const memoAddBook = useMemo(() => {
        return () => setBooks([...books, 'TeS'])
    }, [books])


    const memoAddBook2 = useCallback(() => {
        setBooks([...books, 'TeS'])
    }, [books])
    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>
                +
            </button>
            {counter}
            <Books books={newArray} addBook={memoAddBook2}/>
        </>
    )
}

const BooksSecret = (props: { books: Array<string>, addBook: () => void }) => {
    console.log('Books Secret')
    return (
        <div>
            <button onClick={props.addBook}>
                Add Book
            </button>
            {props.books.map((el, i) => {
                return <div key={i}>{el}</div>
            })}
        </div>
    )
}

const Books = React.memo(BooksSecret)










