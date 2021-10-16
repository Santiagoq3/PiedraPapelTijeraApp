import { types } from "../types/types"

const initialState = {
    userOption: null,
    svg: null,
    bgc: null
}

export const userReducer = (state = initialState , action)=>{


    switch (action.type) {

        case types.userOption:

        return{
            ...state,
            userOption :action.payload.option,
            svg: action.payload.svg,
            bgc: action.payload.bgc
        }
       
        default:
           return state
    }
}