import React from 'react'
import { PokemonDetail } from './PokemonDetail'



export const Aside = ({ pokemon }) => {
  
  
  
  
  return (

    <section className="hidden lg:block sticky top-0 h-screen">
              

      <article className='absolute bottom-0 bg-white w-full h-[85%] rounded-tl-3xl rounded-tr-3xl text-center hidden'> 
        
       <PokemonDetail pokemon={pokemon}/>
        
      </article>

      <article className='absolute bottom-0 bg-white w-full h-[85%] rounded-tl-3xl rounded-tr-3xl text-center'> 
       <header className='absolute left-1/2 -translate-x-1/2 '>
        <img src="/no-pokemon-selected.png" alt="" />
       </header> 
       
        <span>Select a Pokemon to display here.</span>

        
      </article>
    
    
    </section>
  )
}
