import { useEffect, useState } from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

const CharacterList = () => {

    const [characters, setCharacters]=useState([]);
    const [searchParams, setSearchParams]=useSearchParams();

    useEffect(()=>{
        const fetchCharacters= async()=>{
            try{
                const response= await fetch('https://rickandmortyapi.com/api/character');
                const data= await response.json();
                setCharacters(data.results);
            }catch (error){
                console.error('Error fetching characters:', error);
            }
        };
        fetchCharacters();
    },[])



    return (
        <div className="list-container">
            <h2>- Choose Your Character -</h2>
            <div>
            <input 
                        type="text"
                        value={searchParams.get('filter')}
                        onChange={(e)=>{
                            let filter= e.target.value;
                            if(filter){
                                setSearchParams({filter:filter});
                            }else{
                                setSearchParams({filter: ''});
                            }
                        }}
                    />
                
                <nav className="box">
                    {characters
                        .filter(character=>{
                            let keyword=searchParams.get('filter')
                            let name=character.name.toLowerCase();
                            if(!keyword){
                                return true
                            }else{
                                return name.startsWith(keyword.toLowerCase());
                            }
                        })
                        .map((character=>
                            <NavLink
                                key={character.id}
                                to={`/characterList/${character.id}`}
                                className='character'
                            >
                            <div className="character-container" >
                                <img src={character.image} alt="" />
                                <p>{character.name}</p>
                            </div>
                            </NavLink>
                        ))
                    }
                </nav>
                <Outlet/>
            </div>
        </div>
    )
}

export default CharacterList;