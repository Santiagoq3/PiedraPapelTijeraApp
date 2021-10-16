import React from 'react'
import { useSelector } from 'react-redux'
import logo from '../images/logo.svg'


const Header = () => {

    const score = useSelector(state => state.score)


    return (
        <div className="header">
            <img src={logo} />

            <div className="header__score">
                <h3>Score</h3>
                <p>{score}</p>
            </div>
        </div>
    )
}

export default Header
