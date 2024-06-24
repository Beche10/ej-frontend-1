import React from 'react'
import { PokemonPreview } from './PokemonPreview'


export const PokemonList = ({ pokemons }) => {
    return (
        <section>
            {
                pokemons.map((pokemon) => (
                    <PokemonPreview key={pokemon.id} pokemon={pokemon} />
                ))
            }
        </section>
    );
};


