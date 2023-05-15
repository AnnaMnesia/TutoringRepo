// import React, { useState } from 'react';
import React, { useReducer } from 'react';


const initialState = {
  newCard: {
    front: '',
    back: '',
    id: 0,
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NEW_CARD':
      return { ...state, newCard: action.payload }
    default:
      return state;
  }
}

const CardEditor = ({ displayViewer, cards, dispatch }) => {
  // const [newCard, setNewCard] = useState({ front: '', back: '', id: 0 });

  const [state, localDispatch] = useReducer(reducer, initialState);
  const { newCard } = state;
  // console.log(newCard);
  // console.log('cards:', cards);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newCard.front.length > 0 || newCard.back.length > 0) {
      // setNewCard((newCard) => ({ ...newCard, id: newCard.id + 1 }));
      // setCards((cards) => [...cards, newCard]);
      dispatch({
        type: 'SET_CARDS',
        payload: [...cards, newCard]
      })
    } else {
      alert('At least one side needs a value!');
    }

    // setNewCard((newCard) => ({ ...newCard, front: '', back: '' }));
    localDispatch({
      type: 'SET_NEW_CARD',
      payload: { front: '', back: '', id: newCard.id + 1 }
    })
  };

  return (
    <div>
      <header>
        <h1>Card-Editor</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Front</th>
            <th>Back</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cards.length > 0
            ? cards.map((card, index) => (
              <tr key={index}>
                <td>{card.front}</td>
                <td>{card.back}</td>
                <td>
                  <button
                    onClick={(e) =>
                      // setCards((cards) =>
                      //   cards.filter(
                      //     (cardToKeep) => cardToKeep.id !== card.id
                      //   )
                      // )
                      dispatch({
                        type: 'SET_CARDS',
                        payload: cards.filter((cardToKeep) => cardToKeep.id !== card.id)
                      })
                    }
                  >
                    Delete Card
                  </button>
                </td>
              </tr>
            ))
            : null}
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) =>
            // setNewCard((newCard) => ({
            //   ...newCard,
            //   [e.target.name]: e.target.value,
            // }))
            localDispatch({
              type: 'SET_NEW_CARD',
              payload: { ...newCard, [e.target.name]: e.target.value }
            })
          }
          name='front'
          type='text'
          value={newCard.front}
          placeholder='Front of newCard'
        />
        <input
          onChange={(e) =>
            // setNewCard((newCard) => ({
            //   ...newCard,
            //   [e.target.name]: e.target.value,
            // }))
            localDispatch({
              type: 'SET_NEW_CARD',
              payload: { ...newCard, [e.target.name]: e.target.value }
            })
          }
          name='back'
          type='text'
          value={newCard.back}
          placeholder='Back of newCard'
        />
        <input type='submit' value={'Add card'} />
      </form>

      <p></p>
      {/* <button onClick={() => setDisplayViewer(!displayViewer)}>
        Go To Viewer
      </button> */}
      <button onClick={() => dispatch({
        type: 'TOGGLE_VIEWER'
      })}>
        Go To Viewer
      </button>
    </div>
  );
};

export default CardEditor;
