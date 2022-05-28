import React from 'react';

import './pagination.scss';
export const Pagination = ({
  nextPage,
  previousPage,
  handlePreviousPage,
  handleNextPage,
}) => {
  return (
    <div className="pagination">
      {previousPage ? (
        <button className="btn btn-primary" onClick={handlePreviousPage}>
          anterior
        </button>
      ) : (
        <></>
      )}
      {nextPage ? (
        <button className="btn btn-primary" onClick={handleNextPage}>
          siguiete
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
