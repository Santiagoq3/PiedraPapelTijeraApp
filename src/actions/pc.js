import { types } from "../types/types"


export const pcoption = (option,svg,color)=>{
    return{
        type: types.pcOption,
        payload: {
            option:option,
            svg: svg,
            bgc: color
        }
    }

}