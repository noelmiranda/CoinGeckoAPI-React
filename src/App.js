import { useState, useEffect } from "react";
import axios from "axios";
import TableCoins from "./components/TableCoins";

const baseUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const res = await axios({
      url: `${baseUrl}`,
      method: "GET",
    });
    // console.log(res.data);
    setCoins(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <TableCoins coins={coins} />
      </div>
    </div>
  );
}

export default App;
