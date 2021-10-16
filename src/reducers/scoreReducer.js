import { types } from "../types/types"

const initialState = {
    score: 0
}

export const scoreReducer = (state = 0 ,action)=>{

    switch (action.type) {
       
        case types.score:

        return state = state + 1

        
        default:

        return state
    }


}