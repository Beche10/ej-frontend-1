import React from 'react'



export const PokemonPreview = ({ pokemon }) => {  
 
    return (
    <article>
        <header>
        <img src={pokemon.image} alt={pokemon.image}/>
        </header>
        <span>N° 1</span>
        <h4>Pokemon Name</h4>
        <ul>
        <li>Poison</li>
        </ul>
    </article>
  )
}
