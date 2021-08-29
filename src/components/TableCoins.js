import React from "react";
import CoinRow from "./CoinRow";

export default function TableCoins({ coins, search, loading }) {
  //   console.log(coins);
  const titles = ["#", "Coin", "Price Change", "24h Volume", "Total volume"];

  const filterCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  if(loading) {
    return <h2>Loading...</h2>
  }

  return (

    <div className="table-responsive-lg">
      <table className="table table-striped table-dark mt-4 table-hover">
        <thead>
          <tr>
            {titles.map((title, index) => (
              <td key={index}>{title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {filterCoins.map((coin, index) => (
            <CoinRow key={index} coin={coin} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
