import {Meta} from '@storybook/react'
import {SelectKabz} from './SelectKabz'
import {action} from '@storybook/addon-actions'


const meta: Meta<typeof SelectKabz> = {
    title: 'SelectKabz',
    component: SelectKabz
}

export default meta


export const BaseSelectKabzExample = () => {
    return (
        <SelectKabz
            value={'2'}
            onChange={action('Value changed')}
            items={[
                {value: '1', title: 'Obninsk'},
                {value: '2', title: 'Lima'},
                {value: '3', title: 'Istanbul'}
            ]}
        />
    )
}

export const WithoutValueSelect = () => {
    return (
        <SelectKabz
            onChange={action('Value changed')}
            items={[
                {value: '1', title: 'Read'},
                {value: '2', title: 'Write'},
                {value: '3', title: 'Speak'}
            ]}
        />
    )
}