import {createContext} from "react";

export const initialState = {
    language: "en"
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'setLang':
            console.log(action.payload)
            return{
                language: action.payload
            }
        default: return state
    }
}

export const AuthContext = createContext(initialState)