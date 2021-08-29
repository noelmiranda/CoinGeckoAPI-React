import { useState, useEffect } from "react";
import axios from "axios";
import TableCoins from "./components/TableCoins";
import Pagination from "./components/Pagination";

const baseUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(25);

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
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
        <input
          type="text"
          placeholder="Find your coin"
          className="form-control bg-dark text-light borde-0 mt-4 text-center"
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableCoins coins={currentCoins} search={search} />
        <Pagination
          coinsPerPage={coinsPerPage}
          totalCoins={coins.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default App;
