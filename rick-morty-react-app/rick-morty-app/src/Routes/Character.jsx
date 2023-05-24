import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Character = () => {
    const { id } = useParams();
    const [character, setCharacter]=useState(null);

    useEffect(()=>{
        const fetchCharacter= async()=>{
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                const data = await response.json();
                setCharacter(data);
            } catch (error) {
                console.error("Error fetching character:", error);
            }
        };
        fetchCharacter();
    },[id]);

    if (!character) {
        return <div>Loading character...</div>;
    }


    return (
        <div className="separateChar">
            <img src={character.image} alt={character.name} />
            <div>
                <h2>{character.name}</h2>
                <p>Species: {character.species}</p>
                <p>Status: {character.status}</p>
                <p>Gender: {character.gender}</p>
                {/* Display other relevant details about the character */}
            </div>
        </div>
    );
};

export default Character