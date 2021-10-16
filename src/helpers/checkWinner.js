import { pcoption } from "../actions/pc"

// export const checkWinner = (userOpcion,pcOption)=>{

    if(userOpcion ==="rock"){

        if(pcOption==="paper"){return pcOption }
        else if(pcOption==="scissos"){return userOpcion}
        else if(pcOption==="rock"){return "DRAW"}
    
    }
    if(userOpcion ==="paper"){

        if(pcOption==="rock"){return userOpcion }
        else if(pcOption==="paper"){return "DRAW"}
        else if(pcOption==="scissos"){return pcOption}
    
    }
    if(userOpcion ==="scissos"){

        if(pcOption==="rock"){return pcOption }
        else if(pcOption==="paper"){return userOpcion}
        else if(pcOption==="scissos"){return "DRAW"}
    
    }

// }