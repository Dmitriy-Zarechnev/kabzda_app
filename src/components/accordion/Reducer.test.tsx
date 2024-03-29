import {reducer, StateType} from './Reducer'
import {TOGGLE_COLLAPSED} from './UnContrAccordion'

test('collapsed should be true', () => {

    // data
    const state: StateType = {
        collapsed: false
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation

    expect(newState.collapsed).toBe(true)
})


test('collapsed should be false', () => {

    // data
    const state: StateType = {
        collapsed: true
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectation

    expect(newState.collapsed).toBe(false)
})


test('error should be here', () => {

    // data
    const state: StateType = {
        collapsed: true
    }

    expect(() => {
        reducer(state, {type: 'TOGGLE'})
    }).toThrowError()
})