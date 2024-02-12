import type {Meta} from '@storybook/react'
import React, {useMemo, useState} from 'react'


const meta: Meta = {
    title: 'useMemo cities demo'
}
export default meta

type CityType = {
    name: string,
    country: string,
    population: number
}

type SecretComponentPropsType = {
    filteredCity: CityType[]
    state: string
}


export const CitiesSelect = () => {
    const defaultCities = [
        {
            name: 'Moscow',
            country: 'Russia',
            population: 7000000
        },
        {
            name: 'Kemerovo',
            country: 'Russia',
            population: 1000000
        },
        {
            name: 'Obninsk',
            country: 'Russia',
            population: 50000
        },
        {
            name: 'Lima',
            country: 'Peru',
            population: 5000000
        },
        {
            name: 'Cusco',
            country: 'Peru',
            population: 2000000
        },
        {
            name: 'La-Paz',
            country: 'Peru',
            population: 80000
        },
        {
            name: 'Brasilia',
            country: 'Brasilia',
            population: 6000000
        },
        {
            name: 'Gurupi',
            country: 'Brasilia',
            population: 500000
        },
        {
            name: 'Irece',
            country: 'Brasilia',
            population: 90000
        }
    ]

    const [city, setCity] = useState<CityType[]>(defaultCities)
    const [counter, setCounter] = useState(0)

    const cityFilter = useMemo(() => {
        return city.filter(el => el.name.indexOf('o') > -1)
    }, [city])

    const countryFilter = useMemo(() => {
        return city.filter(el => el.country === 'Peru')
    }, [city])

    const populationFilter = useMemo(() => {
        return city.filter(el => el.population < 100000)
    }, [city])

    const onClickHandler = () => {
        setCity([...city, {
            name: 'Gotham',
            country: 'Peru',
            population: 200000
        }])
    }

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>😎</button>
            {counter}
            <button onClick={onClickHandler}>Add New</button>
            <Cities filteredCity={cityFilter} state={'City'}/>
            <Cities filteredCity={countryFilter} state={'Country'}/>
            <Cities filteredCity={populationFilter} state={'Population'}/>

        </div>
    )
}

const SecretComponent = (props: SecretComponentPropsType) => {
    console.log(`${props.state}: component rendered`)
    return (
        <div>
            {props.filteredCity.map((el, i) => {
                return (
                    <div key={i}>
                        <div>City :{el.name}</div>
                        <div>Country :{el.country}</div>
                        <div>Population :{el.population}</div>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

const Cities = React.memo(SecretComponent)
// const UsersSecret = (props: { users: Array<string> }) => {
//     console.log('Users Secret')
//     return (
//         <div>
//             {props.users.map((el, i) => {
//                 return <div key={i}>{el}</div>
//             })}
//         </div>
//     )
// }
//
// const Users = React.memo(UsersSecret)
//
//
// export const HelpsForReactMemo = () => {
//     const [counter, setCounter] = useState(0)
//     const [users, setUsers] = useState(['Bob', 'Sam', 'Dan', 'Man'])
//
//     const newArray = useMemo(() => {
//         return users.filter(el => el.toLowerCase().indexOf('a') > -1)
//     }, [users])
//
//     const addUser = () => {
//         setUsers([...users, 'bra'])
//     }
//
//     return (
//         <>
//             <button onClick={() => {
//                 setCounter(counter + 1)
//             }}>
//                 +
//             </button>
//
//             <button onClick={addUser}>
//                 add user
//             </button>
//             {counter}
//             <Users users={newArray}/>
//         </>
//     )
// }












