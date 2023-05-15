// import React, { useState } from 'react';

const CardViewer = ({ cards, dispatch, currentIndex, isFrontVisible }) => {

  // console.log(cards)
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [isFrontVisible, setIsFrontVisible] = useState(true);


  const stepping = () => {
    // cards= 5 elements -> card length is 5 
    // currentIndex= 2
    //(2+ 1) % 5  = 3
    // const next = (currentIndex + 1) % cards.length;
    // setCurrentIndex(next);
    // setIsFrontVisible(true);
    dispatch({
      type: 'NEXT_CARD',
    })
  };

  return (
    <div>
      <header>
        <h1>Card Viewer</h1>
      </header>

      <div className='cardContainer'>
        {
          cards.length > 0 ? (<p>
            {isFrontVisible ? cards[currentIndex].front : cards[currentIndex].back}
          </p>) : null
        }
      </div>
      <button onClick={stepping}>Next Card</button>
      {/* <button onClick={() => setIsFrontVisible((currentSide) => !currentSide)}>Flip Card</button> */}
      <button onClick={() => dispatch({
        type: 'FLIP_CARD'
      })}>Flip Card</button>
      <p></p>
      {/* <button onClick={() => setDisplayViewer(!displayViewer)}>
        Go To Editor
      </button> */}
      <button onClick={() => dispatch({
        type: 'TOGGLE_VIEWER'
      })}>
        Go To Editor
      </button>
    </div>
  );
};

export default CardViewer;
