import './App.css';
import Scoreboard from './components/Scoreboard';
import ScoreContextProvider from './contexts/ScoreContext';
import Infoboard from './components/Infoboard';

function App() {
  return (
    <ScoreContextProvider>
      <div className="App">
        <Scoreboard />
        <Infoboard />
      </div>
    </ScoreContextProvider>
  );
}

export default App;
