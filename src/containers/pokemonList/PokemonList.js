import React, { Component } from 'react';
import axios from 'axios';
import List from '../../components/list/List';
import Pagination from '../../components/pagination/Pagination';

class PokemonList extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      currentPage: 1,
      pokemonPerPage: 3
    };
  }

  getPokemon() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=300`)
    .then(res => {
      if (this._isMounted) {
        this.setState({
          pokemon: res.data.results
        });
      }
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this.getPokemon();
  }

  handlePrevious = () => {
    this.setState({
      currentPage: this.state.currentPage - 1
    });
  }

  handleNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    let { pokemon, currentPage, pokemonPerPage } = this.state;
    const begin = currentPage * pokemonPerPage;
    const end = begin - pokemonPerPage;
    const currentPokemon = pokemon.slice(end, begin);

    return (
      <>
        <List items={currentPokemon} />
        <Pagination
        currentPage={this.state.currentPage}
        pokemonLength={pokemon.length}
        handlePrevious={this.handlePrevious}
        handleNext={this.handleNext} />
      </>
    );
  }
}

export default PokemonList;