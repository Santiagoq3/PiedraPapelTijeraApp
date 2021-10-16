import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { pcoption } from "../actions/pc";
import { useroption } from "../actions/user";
import { gameWinner } from "../actions/game";
import { scoreAdd } from "../actions/score";


const GameOptions = ({winner,imgs,img,title,bgc}) => {
  
const dispatch = useDispatch()

  const pcoptions= ["rock","paper","scissos"]
  const colors = ["hsl(349,71%,52%)","hsl(230, 89%, 62%)","hsl(39, 89%, 49%)"]

  

  const handleClickOption = (option,img,bgc)=>{
    
    const pcramdon = Math.round(Math.random()*2);
    dispatch(useroption(option,img,bgc))

    dispatch(pcoption(pcoptions[pcramdon],imgs[pcramdon],colors[pcramdon]))

    if(option ===pcoptions[pcramdon]){
     
      dispatch(gameWinner("EMPATE"))
    }
    else if(option==='rock'){
      if(pcoptions[pcramdon]==="paper"){dispatch(gameWinner("PERDISTE"))}
      if(pcoptions[pcramdon]==="scissos"){dispatch(gameWinner("GANASTE"),dispatch(scoreAdd()) )}
    }
    else if(option==='paper'){
      if(pcoptions[pcramdon]==="rock"){dispatch(gameWinner("GANASTE"), dispatch(scoreAdd()))}
      if(pcoptions[pcramdon]==="scissos"){dispatch(gameWinner("PERDISTE"))}
    }
    else if(option==='scissos'){
      if(pcoptions[pcramdon]==="rock"){dispatch(gameWinner("PERDISTE"))}
      if(pcoptions[pcramdon]==="paper"){dispatch(gameWinner("GANASTE"),dispatch(scoreAdd()))}
    }
   
  }


  console.log(winner)
  return (
    <div>
      <div onClick={()=>{handleClickOption(title,img,bgc)}} className="border " style={{backgroundColor:bgc }}>
        <div className="container__game-options__rock">
          <img src={img} alt="ad" />
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};
export default GameOptions;
