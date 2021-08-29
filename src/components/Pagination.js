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
                      <li key={number} className="page-item">
                      <a onClick={() => paginate(number)} href="!#" className="page-link">
                          {number}
                      </a>
                      </li>
                  ))
              }
          </ul>
      </nav>



    )
}



