import {NavLink,Routes,Route} from 'react-router-dom'
import './App.css';


import Header from './components/Header';
import Home from './Routes/Home';
import About from './Routes/About';
import CharacterList from './Routes/CharacterList';
import Character from './Routes/Character';

function App() {
  return (
    <div className="App">
      <NavLink to='/'>
        <Header/>
      </NavLink>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='about' element={<About/>}/>
          <Route path='characterList' element={<CharacterList/>}>
            <Route path=':id' element={<Character/>}/>
          </Route>
        </Route>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
