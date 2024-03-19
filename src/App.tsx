import './App.css'
import Counter from './components/Counter/Counter'
import { useGetPokemonByNameQuery } from './features/pokemon/pokemonApi'

function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  console.log('data', data)
  console.log('error', error)
  console.log('isLoading', isLoading)
  return (
    <div className="App">
      <Counter />
    </div>
  )
}

export default App
