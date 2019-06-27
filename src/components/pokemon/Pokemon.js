import React from 'react';
import './Pokemon.css';

function Pokemon(props) {
  let { pokemon, id, url } = props;
  switch (pokemon) {
    case "nidoran-f":
      pokemon = "nidoranf";
      break;
    case "nidoran-m":
      pokemon = "nidoranm";
      break;
    case "deoxys-normal":
      pokemon = "deoxys";
      break;
    default:
      break;
  }
  const getId = (url) => {
    const id = url.substring(34, url.length - 1);
    return id;
  }
  return (
    <div className="pokemon-card">
      <img
        className="sprites"
        src={`http://pokestadium.com/sprites/xy/${pokemon}.gif`}
        alt={pokemon}
        id={id}
      />
      <div className="align-bottom">{pokemon} ({getId(url)})</div>
    </div>
  );
}

export default Pokemon;