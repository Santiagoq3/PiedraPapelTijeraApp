import { types } from "../types/types"


export const useroption = (option,svg,color)=>{
    return{
        type: types.userOption,
        payload: {
            option:option,
            svg: svg,
            bgc: color
        }
    }

}