import React from 'react'
import { useSelector } from 'react-redux'
import GameOptions from './GameOptions'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import scissos from '../images/icon-scissors.svg'

const OptionSelected = ({title}) => {

    const {userOption,svg,bgc} = useSelector(state => state.user)
    return (

        <div>
            <div className="game__results">
                <p className="game__results-players" >{title}</p>

                {
                    userOption === null ? <p className="game__option"></p> : <GameOptions img={svg} title={userOption} bgc={bgc} />

                }

            </div>
        </div>
        
    )
}
export default OptionSelected
