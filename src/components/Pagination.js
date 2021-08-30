import React from 'react'

export default function Pagination({coinsPerPage, totalCoins, paginate }) {
const pageNumber = []

for(let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++ )

pageNumber.push(i)

    return (
      <nav>
          <ul className="pagination justify-content-center">
              {
                  pageNumber.map(number => (
                      <button
                      type="button"
                      className="btn btn-outline-secondary me-md-2"
                      key={number}
                      onClick={() => paginate(number)}
                      >                        {number}  
                      </button>
                  ))
              }
          </ul>
      </nav>



    )
}



