import { types } from "../types/types"


export const gameWinner = (winner)=>{

    return{
        type: types.gameWinner,
        payload: winner

    }
}