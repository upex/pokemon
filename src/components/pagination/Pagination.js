import React from 'react';
import './Pagination.css';

function Pagination({currentPage, pokemonLength, handlePrevious, handleNext}) {
  return (
    <div className="pokemon-pagination">
      <button className={"button " + (currentPage === 1 ? 'disabled-button' : '')}
      disabled={ currentPage === 1}
      onClick={handlePrevious}>&laquo; Previous</button>
      <button
      className={"button " + (currentPage >= pokemonLength ? 'disabled-button' : '')}
      disabled={ currentPage >= pokemonLength}
      onClick={handleNext}>Next &raquo;</button>
    </div>
  );
}

export default Pagination;