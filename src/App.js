import React from 'react';
import './App.css';
import PokemonList from './containers/pokemonList/PokemonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PokemonList />
      </header>
    </div>
  );
}

export default App;
