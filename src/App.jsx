import { Aside } from "./components/Aside"
import { ModalPokemon } from "./components/ModalPokemon"
import { Pokemons } from "./components/Pokemons"
import { usePokemonContext } from "./hooks/usePokemonContext"

function App() {
  
  const { showDetailPokemon, closePokemonDetail, pokemonDetail } = usePokemonContext();

  return (
    <>
      <section className="bg-[#807e7e79] h-screen font-outfit overflow-y-auto"> 
       <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
     
        <Pokemons />
        <Aside />
        <ModalPokemon 
          showModal={showDetailPokemon} 
          onCloseModal={closePokemonDetail}
          pokemon={pokemonDetail}
        />
       </main> 
      </section>
    </>
  )
}

export default App
