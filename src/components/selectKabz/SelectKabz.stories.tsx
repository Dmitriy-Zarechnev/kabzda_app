import {Meta} from '@storybook/react'
import {SelectKabz} from './SelectKabz'
import {useState} from 'react'


const meta: Meta<typeof SelectKabz> = {
    title: 'SelectKabz',
    component: SelectKabz
}

export default meta


export const BaseSelectKabzExample = () => {
    const [value, setValue] = useState('2')

    return (
        <SelectKabz
            value={value}
            onChange={setValue}
            items={[
                {value: '1', title: 'Obninsk'},
                {value: '2', title: 'Lima'},
                {value: '3', title: 'Istanbul'}
            ]}
        />
    )
}

export const WithoutValueSelect = () => {
    const [value, setValue] = useState(null)

    return (
        <SelectKabz
            onChange={setValue}
            value={value}
            items={[
                {value: '1', title: 'Read'},
                {value: '2', title: 'Write'},
                {value: '3', title: 'Speak'}
            ]}
        />
    )
}