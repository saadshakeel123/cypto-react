import Crypto from "./componenets/Crypto";
import Nav from "./componenets/Nav";
import { Routes, Route } from "react-router-dom";
import Hero from "./componenets/Hero";
import "./componenets/App.css"

function App() {

  return (

    <>

      <Nav />
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>

    </>
  );
}

export default App;
