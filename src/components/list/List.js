import React from 'react';
import PropTypes from 'prop-types';
import './List.css';
import Pokemon from '../pokemon/Pokemon';

function List(props) {
  let { items } = props;
  return (
    <div className="pokemon-container">
      {items.map((monster, index) =>
        <Pokemon key={monster.name} id={index + 1} url={monster.url} pokemon={monster.name} />
      )}
    </div>
  );
}
List.propTypes = {
  items: PropTypes.array,
};
export default List;