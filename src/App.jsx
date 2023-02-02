import "./App.css";
import axios from "axios";
import { useState } from "react";
import Nav from "./Nav";


function App() {
  const [values, setValues] = useState([]);
  
  axios
    .get("https://api.coingecko.com/api/v3/coins")
    .then((res) => {
      setValues(res.data);
      
    })
    .catch((err) => {
      console.log(err);
    });

  return (

    <>
  
    <Nav />

    <div className="container" style={{marginTop:"10%"}}>
      <table className="market-table">
        <thead class="table-head">
          <tr class="table-row table-title">
            <th>#Coin</th>
            <th>Current Price</th>
            <th>24h</th>
            <th>7d</th>
            <th>1y</th>
            <th>24h volume</th>
            <th>Sparkline</th>
          </tr>
        </thead>

        <tbody class="table-body">

          {values.map((item) => {
            return (
            <>
              <tr class="table-row">
              <td class="table-data">
                    <div class="wrapper">
                      <img src={item.image.thumb} width="20" height="20" alt="Bitcoin logo" class="img" />

                      <h3>
                        <a href="#" class="coin-name">{item.id} <span class="span">{item.symbol}</span></a>
                      </h3>
                    </div>
                  </td>

                  <td class="table-data last-price">{item.market_data.current_price.usd}</td>

                  <td class="table-data last-update green">{item.market_data.price_change_percentage_24h}</td>

                  <td class="table-data last-update green">{item.market_data.price_change_percentage_7d}</td>

                  <td class="table-data market-cap">{item.market_data.price_change_percentage_1y}</td>

                  <td class="table-data market-cap">{item.market_data.market_cap.usd}</td>

                  <td class="table-data">
                    <img src="https://www.coingecko.com/coins/01coin/sparkline" width="100" height="40" alt="profit chart" class="chart" />
                  </td>
              </tr>
            </>);
          })}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;
