import React, {useContext} from 'react'
import { ScoreContext } from '../contexts/ScoreContext';

const Scoreboard = () => {

    const [score, plusScore, minusScore]=useContext(ScoreContext);
    
    return (
        <div>
            <h1>Score Board</h1>
            <h2>Your Current Score is <span>{score}</span></h2>
            <div>
                <button onClick={plusScore}>+</button>
                <button onClick={minusScore}>-</button>
            </div>
            {/* <h3>{score < 100 ? "Let's make it over 100!" : "Good job!"}</h3> */}
        </div>
    )
}

export default Scoreboard;