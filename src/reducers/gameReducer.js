import { types } from "../types/types"


const initialState = {

    winner: ""

}

export const gameReducer = (state = initialState, action)=>{


    switch (action.type) {

        case types.gameWinner:


        return{
            ...state,
            winner: action.payload
        }
       
    
        default:
        
        return state
    }

}