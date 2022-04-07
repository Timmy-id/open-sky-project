import React, { useState, useEffect } from 'react';
import './Pagination.css';

const Pagination = ({ flightData }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);

  const [pageNumberLimit] = useState(10);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = [];

  for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * dataPerPage;

  const indexOfFirstItem = indexOfLastItem - dataPerPage;

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  console.log('currentItems:', currentItems);

  const renderPageNumbers = pages.map((number) => {
    if (
      number < maxPageNumberLimit + 1 &&
      number > minPageNumberLimit
    ) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? 'active' : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    fetch(
      'https://opensky-network.org/api/flights/all?begin=1649066400&end=1649073600'
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .then(() => setIsLoading(false));
  }, []);

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;

  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextBtn}> &hellip;</li>;
  }

  let pageDecrementBtn = null;

  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevBtn}> &hellip;</li>;
  }

  const handleLoadMore = () => {
    setDataPerPage(dataPerPage + 5);
  };

  return isLoading ? (
    <h1 style={{ fontSize: '30px', color: 'white' }}>Loading...</h1>
  ) : (
    <div>
      <div className='btn-container'>
        {flightData(currentItems)}
        <ul className='pageNumbers'>
          <li>
            <button
              onClick={handlePrevBtn}
              disabled={currentPage === pages[0] ? true : false}
            >
              &#60;&#60;
            </button>
          </li>

          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}

          <li>
            <button
              onClick={handleNextBtn}
              disabled={
                currentPage === pages[pages.length - 1] ? true : false
              }
            >
              &#62;&#62;
            </button>
            <button onClick={handleLoadMore}>Load More</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
