import React from 'react'
import { PokemonDetail } from './PokemonDetail'



export const Aside = ({ pokemon }) => {
  
  
  
  
  return (
    
    <section className="hidden lg:block sticky top-0 h-screen">
              
      <article className='absolute bottom-0 bg-white w-full h-[85%] rounded-tl-3xl rounded-tr-3xl text-center'> 
        
       <PokemonDetail pokemon={pokemon}/>
        
      </article>
    
    
    </section>
  )
}
