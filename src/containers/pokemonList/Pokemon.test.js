import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PokemonList from './PokemonList';
import List from '../../components/list/List';
Enzyme.configure({ adapter: new Adapter() });

it('renders list without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PokemonList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe("PokemonList component", () => {
  test("renders", () => {
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
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});