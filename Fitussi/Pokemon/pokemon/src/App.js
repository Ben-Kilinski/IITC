import './App.css';
import PokemonCard from './Components/PokemonCard';

function App() {
  return (
    <div className="App">
      <h1>Pokémon Card Viewer</h1>
      <div className='card-grid'>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
    </div>
  );
}

export default App;