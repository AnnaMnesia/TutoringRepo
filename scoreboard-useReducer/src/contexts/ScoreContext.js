import {useState, createContext } from "react";
// import { useReducer } from "react";

export const ScoreContext = createContext(null);


// const initialState ={
//     score: 0,
// }

// const reducer=(state, action)=>{
//     switch(action.type){
//         case 'PLUS_SCORE':
//             return {score: state.score + 10}
//         case 'MINUS_SCORE':
//             return {score: state.score - 10}
//         default:
//             return state;
//     }
// }

const ScoreContextProvider = ({children}) => {
    // useState Hook
    const [score, setScore]=useState(0);

    // useReducer Hook
    // const [state, dispatch]=useReducer(reducer, initialState);
    // const {score}=state;

    const plusScore=()=> setScore(score + 10)
    const minusScore=()=> setScore(score - 10)

    // const plusScore=()=> dispatch({type:'PLUS_SCORE'});
    // const minusScore=()=> dispatch({type: 'MINUS_SCORE'});


    return (
        <ScoreContext.Provider value={[score, plusScore, minusScore]}>
            {children}
        </ScoreContext.Provider>
    )
}

export default ScoreContextProvider;