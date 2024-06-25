import { createContext } from "react";


export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {

    const [showDetailPokemon, setShowDetailPokemon] = useState(false)

    const showPokemonById = () => {
        setShowDetailPokemon(true);
    };

    const closePokemonDetail = () => {
        setShowDetailPokemon(false);
    };

    return (<PokemonContext.Provider value={{
        showDetailPokemon,
        showPokemonById,
        closePokemonDetail
    }}
    > {children} 
    </PokemonContext.Provider>
    );
};