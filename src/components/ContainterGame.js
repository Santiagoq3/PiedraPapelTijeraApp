import React from 'react'
import { useSelector } from 'react-redux'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissos from '../images/icon-scissors.svg'
import Game from './Game'
import GameOptions from './GameOptions'

const ContainterGame = () => {

    const imgs = [rock,paper,scissos];
    const {userOption} = useSelector(state => state.user)
    const {pcOption} = useSelector(state => state.pc)
    const {winner} = useSelector(state => state.game)

    return (
        <div className="containergame">

            <Game />
            

           

            <div className="container__game-options">

                <GameOptions winner={winner} imgs={imgs} img={rock} title="rock" bgc={"hsl(349,71%,52%)"} />
                <GameOptions winner={winner}  imgs={imgs} img={paper} title="paper" bgc="hsl(230, 89%, 62%)" />
                <GameOptions winner={winner} imgs={imgs} img={scissos} title="scissos" bgc="hsl(39, 89%, 49%)" />
            
            </div>
        </div>
    )
}
export default ContainterGame
