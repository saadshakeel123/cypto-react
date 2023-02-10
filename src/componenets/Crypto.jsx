import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";


function Crypto() {
  const [values, setValues] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/")
      .then((res) => {
        setValues(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])



  return (

    <>
    
      <div className="container" style={{ marginTop: "10%" }}>
        <table className="market-table">
          <thead className="table-head">
            <tr className="table-row table-title">
              <th>#Coin</th>
              <th>Current Price</th>
              <th>24h</th>
              <th>7d</th>
              <th>1y</th>
              <th>24h volume</th>
              <th>Sparkline</th>
            </tr>
          </thead>

          <tbody className="table-body">

            {values.map((item, index) => {
              return (
                <>
                  
                  <tr className="table-row">
                    <td className="table-data">
                      <div className="wrapper">
                      {index+1}
                        <img src={item.image.thumb} width="20" height="20" alt="Bitcoin logo" className="img" />

                        <h3>
                          <a href="#" className="coin-name"> {item.id} <span className="span">{item.symbol}</span></a>
                        </h3>
                      </div>
                    </td>

                    <td className="table-data last-price">${item.market_data.current_price.usd}</td>

                    <td className="table-data last-update green">{item.market_data.price_change_percentage_24h}</td>

                    <td className="table-data last-update green">{item.market_data.price_change_percentage_7d}</td>

                    <td className="table-data market-cap">{item.market_data.price_change_percentage_1y}</td>

                    <td className="table-data market-cap">{item.market_data.market_cap.usd}</td>

                    <td className="table-data">
                      <img src={`https://www.coingecko.com/coins/${index+1}/sparkline`} width="100" height="40" alt="profit chart" className="chart" />
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

export default Crypto;
