import React, {createContext, useReducer } from "react"

const initialState = {
    number: 1,
    names: '',
    arrNames: [],
    groups: []
}

export const Context = createContext(initialState)

export const Store = ({ children }) => {

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SET_NUMBER':
                return {
                    ...state,
                    number: action.payload
                }
            case 'SET_NAMES':
                return {
                    ...state,
                    names: action.payload
                }
            case 'SET_ARRNAMES':
                return {
                    ...state,
                    arrNames: action.payload
                }
            case 'SET_GROUPS':
                return {
                    ...state,
                    groups: action.payload
                }
            default:
                return state
        }
    }, initialState)

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}