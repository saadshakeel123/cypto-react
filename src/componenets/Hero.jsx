import React from 'react'
import Image from "./hero-banner.png"
import "./App.css"
import axios from 'axios'
import { useEffect,useState } from 'react'

function Hero() {
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
            <section class="section hero" >
                <div class="container">

                    <div class="hero-content">

                        <h1 class="h1 hero-title">Buy & Sell Digital Assets In The Cryptex</h1>

                        <p class="hero-text">
                            Coin Cryptex is the easiest, safest, and fastest way to buy & sell crypto asset exchange.
                        </p>

                        <a href="#" class="btn btn-primary ">Get started now</a>

                    </div>

                    <figure class="hero-banner">
                        <img src={Image} width="570" height="448" alt="hero banner" class="w-100"/>
                    </figure>

                </div>
            </section>

            <section class="section trend" aria-label="crypto trend" >
        <div class="container">

          <div class="trend-tab">

            <ul class="tab-nav">

              <li>
                <button class="tab-btn active">Crypto</button>
              </li>

              <li>
                <button class="tab-btn">DeFi</button>
              </li>

              <li>
                <button class="tab-btn">BSC</button>
              </li>

              <li>
                <button class="tab-btn">NFT</button>
              </li>

              <li>
                <button class="tab-btn">Metaverse</button>
              </li>

              <li>
                <button class="tab-btn">Polkadot</button>
              </li>

              <li>
                <button class="tab-btn">Solana</button>
              </li>

              <li>
                <button class="tab-btn">Opensea</button>
              </li>

              <li>
                <button class="tab-btn">Makersplace</button>
              </li>

            </ul>

            <ul class="tab-content">

              <li>
                <div class="trend-card">

                  <div class="card-title-wrapper">
                    <img  width="24" height="24" alt="bitcoin logo"/>

                    <a href="#" class="card-title">
                      Bitcoin <span class="span">BTC/USD</span>
                    </a>
                  </div>

                  <data class="card-value" value="46168.95">USD 46,168.95</data>

                  <div class="card-analytics">
                    <data class="current-price" value="36641.20">36,641.20</data>

                    <div class="badge red">-0.79%</div>
                  </div>

                </div>
              </li>

              <li>
                <div class="trend-card active">

                  <div class="card-title-wrapper">
                    <img src="./assets/images/coin-2.svg" width="24" height="24" alt="ethereum logo"/>

                    <a href="#" class="card-title">
                      Ethereum <span class="span">ETH/USD</span>
                    </a>
                  </div>

                  <data class="card-value" value="3480.04">USD 3,480.04</data>

                  <div class="card-analytics">
                    <data class="current-price" value="36641.20">36,641.20</data>

                    <div class="badge green">+10.55%</div>
                  </div>

                </div>
              </li>

              <li>
                <div class="trend-card">

                  <div class="card-title-wrapper">
                    <img src="./assets/images/coin-3.svg" width="24" height="24" alt="tether logo"/>

                    <a href="#" class="card-title">
                      Tether <span class="span">USDT/USD</span>
                    </a>
                  </div>

                  <data class="card-value" value="1.00">USD 1.00</data>

                  <div class="card-analytics">
                    <data class="current-price" value="36641.20">36,641.20</data>

                    <div class="badge red">-0.01%</div>
                  </div>

                </div>
              </li>

              <li>
                <div class="trend-card">

                  <div class="card-title-wrapper">
                    <img src="./assets/images/coin-4.svg" width="24" height="24" alt="bnb logo"/>

                    <a href="#" class="card-title">
                      BNB <span class="span">BNB/USD</span>
                    </a>
                  </div>

                  <data class="card-value" value="443.56">USD 443.56</data>

                  <div class="card-analytics">
                    <data class="current-price" value="36641.20">36,641.20</data>

                    <div class="badge red">-1.24%</div>
                  </div>

                </div>
              </li>

            </ul>

          </div>

        </div>
      </section>

        </>
    )
}

export default Hero