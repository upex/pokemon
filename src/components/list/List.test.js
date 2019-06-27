import React from 'react';
import { shallow } from '../../enzyme';
import List from './List';
import Pokemon from '../pokemon/Pokemon';

describe('List tests', () => {
  it('renders pokemon-items', () => {
    const items = [
      {
        name:"bulbasaur",
        url:"https://pokeapi.co/api/v2/pokemon/1/"
      },
      {
        name:"ivysaur",
        url:"https://pokeapi.co/api/v2/pokemon/2/"
      },
      {
        name:"venusaur",
        url:"https://pokeapi.co/api/v2/pokemon/3/"
      }
    ];
    const wrapper = shallow(<List items={items} />);
    console.log(wrapper.debug());
    expect(wrapper.find('.pokemon-container')).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a pokemon', () => {
    const items = [
      {
        name:"bulbasaur",
        url:"https://pokeapi.co/api/v2/pokemon/1/"
      },
      {
        name:"ivysaur",
        url:"https://pokeapi.co/api/v2/pokemon/2/"
      },
      {
        name:"venusaur",
        url:"https://pokeapi.co/api/v2/pokemon/3/"
      }
    ];
    const wrapper = shallow(<List items={items} />);
    // Check if an element in the Component exists
    expect(wrapper.find('.pokemon-card')).toBeDefined();
  });
});