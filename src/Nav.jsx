import React from 'react'
import "./App.css"


function Nav() {
  return (
    <header class="header" data-header>
    <div class="container">

      <a href="#" class="logo">
        <img src="http://127.0.0.1:5501/assets/images/logo.svg
        " width="32" height="32" alt="Cryptex logo" />
        Cryptex
      </a>

      <nav class="navbar" data-navbar>
        <ul class="navbar-list">

          <li class="navbar-item">
            <a href="#" class="navbar-link active" data-nav-link>Homepage</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link" data-nav-link>Buy Crypto</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link" data-nav-link>Markets</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link" data-nav-link>Sell Crypto</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link" data-nav-link>Blog</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link" data-nav-link>BITUSDT</a>
          </li>

        </ul>
      </nav>

      <button class="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
      </button>

      <a href="#" class="btn btn-outline">Wallet</a>

    </div>
  </header>
  )
}

export default Nav