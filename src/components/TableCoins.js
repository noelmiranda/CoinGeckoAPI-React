import React from "react";
import { useState } from "react";
import CoinRow from "./CoinRow";

export default function TableCoins({ coins, loading }) {
  //   console.log(coins);
  const titles = ["#", "Coin", "Price Change", "24h Volume", "Total volume"];

  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");

  const filterCoins = () => {
    if (search.length === 0) return coins.slice(currentPage, currentPage + 25);

    const filterCoins = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
    return filterCoins.slice(currentPage, currentPage + 25);
  };

  const nextPage = () => {
     setCurrentPage(currentPage + 25);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 25);
  };

  const onSearchChange = (e) => {
    setCurrentPage(0);
    setSearch(e.target.value);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="table-responsive-lg">
      <input
        type="text"
        placeholder="Find your coin"
        className="form-control bg-dark text-light borde-0 mt-4 text-center"
        value={search}
        onChange={onSearchChange}
      />
      <table className="table table-striped table-dark mt-4 table-hover">
        <thead>
          <tr>
            {titles.map((title, index) => (
              <td key={index}>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {filterCoins().map((coin, index) => (
            <CoinRow key={index} coin={coin} index={index} />
          ))}
        </tbody>
      </table>
      <div className="text-center mb-4">
        <button
          className="btn btn-outline-light btn-lg me-2"
          onClick={prevPage}
        >
          &lt;
        </button>
        <button className="btn btn-outline-light btn-lg" onClick={nextPage}>
          &gt;
        </button>
      </div>
    </div>
  );
}
