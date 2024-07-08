import { IconX } from '@tabler/icons-react'
import React from 'react'
import { colorByType } from '../utils/constants'

export const ModalPokemon = ({ showModal, onCloseModal, pokemon }) => {
  return (
    <section className={`fixed lg:hidden top-0 left-0 right-0 h-screen bg-green-400 transition-all duration-500 
      ${showModal ? 'visible opacity-100' : 'invisible opacity-0'}`}>
     
     <button onClick={onCloseModal} className='bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity'>
        <IconX size={34} stroke={4}/>
     </button>
     <article className={`bg-white h-[85%] absolute w-full rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-500 ${showModal ? 'bottom-0' : '-bottom-full'}`}>
       <header className='absolute left-1/2 -translate-x-1/2 -translate-y-[92%] scale-[180%]'>
        <img src={pokemon?.animatedImage} alt="" />
       </header>
       <div className='overflow-y-auto px-4 pt-12 grid gap-2 content-start'>
       <span className='text-slate-400 text-sm font-semibold '> N°{pokemon?.id} </span> 
       <h2 className='font-bold text-lg capitalize'> {pokemon?.name} </h2>
       <ul className='flex gap-2 justify-center'>
        {pokemon?.type.map((type, index) => (
          <li className={`p-1 rounded-md px-2 text-white text-sm ${colorByType[type]}`} key={index}>{type}</li> 
         ))}
        </ul>
        <div>
        <h4 className='font-bold capitalize'>Pokemon Entry</h4>
        <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam dolor amet tempora laudantium officia voluptatibus placeat vel enim hic? Recusandae possimus odio adipisci officiis dolores blanditiis, vitae consequuntur ipsa.</p>
        </div>
        <section className="grid gap-2">
          <h4 className="font-bold capitalize">Abilities</h4>
          <ul className="grid grid-cols-2 gap-4">
            {pokemon?.skills.map((skill) => (
              <li
                key={skill}
                className="bg-slate-100 block rounded-full p-1 capitalize"
              >
                <span>{skill}</span>
              </li>
            ))}
          </ul>
         </section>
        </div>
     </article>
    </section>
  )
}
