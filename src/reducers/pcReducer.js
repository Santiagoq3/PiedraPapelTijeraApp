import { types } from "../types/types"

const initialState = {
    pcOption: null,
    svg: null,
    bgc: null
}



export const pcReducer = (state = initialState, action )=>{

    switch (action.type) {

        case types.pcOption:
        
        return{
            ...state,
            pcOption:action.payload.option,
            svg:action.payload.svg,
            bgc:action.payload.bgc
        }
      
        default:
            return state
    }

}