import React from 'react'
import { PokemonPreview } from './PokemonPreview'


export const PokemonList = ({ pokemons }) => {
    return (
        <section className='pt-14 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-14'>
            {
                pokemons.map((pokemon) => (
                    <PokemonPreview key={pokemon.id} pokemon={pokemon} />
                ))
            }
        </section>
    );
};



