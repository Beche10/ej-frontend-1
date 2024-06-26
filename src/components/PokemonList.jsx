import React from 'react'
import { PokemonPreview } from './PokemonPreview'
import { usePokemonContext } from '../hooks/usePokemonContext';


export const PokemonList = ({ pokemons }) => {

    const { showPokemon } = usePokemonContext();



    return (
        <section className='pt-14 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-14'>
            {
                pokemons.map((pokemon) => (
                    <PokemonPreview 
                    key={pokemon.id} 
                    pokemon={pokemon}
                     onClick={showPokemon}/>
                ))
            }
        </section>
    );
};



