import React from 'react';
import Enzyme, { shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Pokemon from './Pokemon';
Enzyme.configure({ adapter: new Adapter() });

describe("Pokemon component", () => {
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
    const wrapper = shallow(<Pokemon key="bulbasaur" id="0" url="https://pokeapi.co/api/v2/pokemon/1/" pokemon="bulbasaur" />);
    console.log(wrapper.debug());
    expect(wrapper.exists()).toBe(true);
  });
});