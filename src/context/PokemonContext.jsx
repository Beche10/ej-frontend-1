import { createContext, useState } from "react";


export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    
    const [pokemonDetail, setPokemonDetail] = useState(null);
    const [showDetailPokemon, setShowDetailPokemon] = useState(false)

    const showPokemon = (pokemonInfo) => {

        const {id, name, skills, type, animatedImage  } = pokemonInfo;

        setPokemonDetail({
            id,
            name,
            skills,
            type,
            animatedImage
        });

        setShowDetailPokemon(true);
    };

    const closePokemonDetail = () => {
        setShowDetailPokemon(false);
    };

    return (<PokemonContext.Provider value={{
        showDetailPokemon,
        showPokemon,
        closePokemonDetail,
        pokemonDetail
    }}
    > {children} 
    </PokemonContext.Provider>
    );
};