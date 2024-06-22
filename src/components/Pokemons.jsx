import axios from 'axios';
import React from 'react'

export const Pokemons = () => {

    useEffect(() => {
       
        axios.get("http://localhost:8080/api/pokemones")
        .then( () => console.log())
        .catch( (error) => console.log(error))

    }, [])
    



    return (
       <section></section>
  )
};