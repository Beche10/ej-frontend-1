import { IconX } from '@tabler/icons-react'
import React from 'react'

export const ModalPokemon = () => {
  return (
    <section className='fixed top-0 left-0 right-0 h-screen bg-green-400'>
     <button className='bg-white absolute top-4 righ-4 p-1 rounded-lg'>
        <IconX size={34} stroke={4}/>
     </button>
     <article className='bg-white h-[85%] absolute w-full bottom-0 rounded-tl-3xl rounded-tr-3xl text-center'>
       Pokemon
     </article>
    </section>
  )
}