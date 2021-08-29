import React from "react";

export default function CoinRow({ coin, index }) {
  // console.log(coin, index);
  const priceChange = new Intl.NumberFormat().format(coin.current_price)
  return (
    <tr>
      <td>{coin.market_cap_rank}</td>
      <td>
        <img
          src={coin.image}
          alt="coin.name"
          style={{ width: "3%" }}
          className="img-fluid me-4"
        />
        <span>{coin.name}</span>
        <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
      </td>
      <td>$ {priceChange}</td>
      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        {coin.price_change_percentage_24h}
      </td>
      <td>{coin.total_volume}</td>
    </tr>
  );
}
