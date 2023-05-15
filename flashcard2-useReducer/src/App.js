import React, { useReducer } from 'react';
import './App.css';
import CardEditor from './components/CardEditor';
import CardViewer from './components/CardViewer';

const initialState = {
  displayViewer: false,
  cards: [],
  currentIndex: 0,
  isFrontVisible: true,

}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CARDS':
      return { ...state, cards: action.payload };
    case 'TOGGLE_VIEWER':
      return { ...state, displayViewer: !state.displayViewer };
    case 'NEXT_CARD':
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % state.cards.length,
        isFrontVisible: true
      };
    case 'FLIP_CARD':
      return { ...state, isFrontVisible: !state.isFrontVisible };
    default:
      return state;
  }
}

function App() {

  // const [displayViewer, setDisplayViewer] = useState(false);
  // const [cards, setCards] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  // const { displayViewer, cards } = state;

  return (
    <div className="App">
      <h1>FlashCard App</h1>

      {state.displayViewer ? (
        <CardViewer
          cards={state.cards}
          // setCards={setCards}
          // setDisplayViewer={setDisplayViewer}
          dispatch={dispatch}
          displayViewer={state.displayViewer}
          isFrontVisible={state.isFrontVisible}
          currentIndex={state.currentIndex}
        />
      ) : (
        <CardEditor
          cards={state.cards}
          // setCards={setCards}
          // setDisplayViewer={setDisplayViewer}
          dispatch={dispatch}
          displayViewer={state.displayViewer}
        />
      )}


    </div>
  );
}

export default App;
