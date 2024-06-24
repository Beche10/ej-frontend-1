import React from 'react'



export const PokemonPreview = ({ pokemon }) => {  
 
    return (
    <article>
        <header>
        <img src={pokemon.image} alt={pokemon.image}/>
        </header>
        <span>N°{pokemon?.id}</span>
        <h4>{pokemon?.name}</h4>
        <ul>
        {pokemon?.type.map((type, index) => (
          <li key={index}>{type}</li> 
         ))}
        </ul>
    </article>
  )
}
