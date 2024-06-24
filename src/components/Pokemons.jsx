import { IconSearch } from '@tabler/icons-react';
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

export const Pokemons = () => {
    
    const [allPokemones, setAllPokemones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        fetch("http://localhost:8080/api/pokemones/all")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); 
                setAllPokemones(data.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setError(error);
                setLoading(false);
            });
    }, []); 

    
    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar los datos.</p>;

    return (
        <section className='p-4 py-5'>
         <form>
            <div className='bg-white p-4 flex rounded-2xl text-lg'>
                <input className='outline-none flex-1' type="text" placeholder='Search your Pokemon..' /> 
                <button className='bg-red-500 p-2 rounded-xl shadow-lg shadow-red-500/50  hover:bg-red-400 transition-colors'>
                <IconSearch color='white' stroke={4}/>
                </button>
            </div>
         </form>
        </section>
    );
};