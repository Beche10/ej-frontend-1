import React from 'react'



export const PokemonPreview = ({ pokemon }) => {  
 
    return (
    <article className='text-center bg-white rounded-3xl relative font-semibold capitalize pb-2 shadow-slate-400/10 border-2 border-transparent hover:border-slate-200 cursor-pointer group'>
        <header className='h-28 mb-2 flex items-center justify-center overflow-hidden'>
        <img className='w-full h-full object-contain group-hover:scale-105'
        src={pokemon.image} alt={pokemon.image}/>
        </header>
        <span className='text-sm text-slate-400'>N°{pokemon?.id}</span>
        <h4 className='text-lg'>{pokemon?.name}</h4>
        <ul className='flex gap-2 justify-center'>
        {pokemon?.type.map((type, index) => (
          <li key={index}>{type}</li> 
         ))}
        </ul>
    </article>
  )
}
