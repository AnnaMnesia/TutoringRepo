import React,{useContext} from 'react'
import { ScoreContext } from '../contexts/ScoreContext'

const Infoboard = () => {

    const [score]=useContext(ScoreContext);

    return (
        <h3>{score < 100 ? "Let's make it over 100!" : "Good job!"}</h3>
    )
}

export default Infoboard