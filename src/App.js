import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./compomemts/header";
import Issue from "./compomemts/issue/Isuues";
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Issue/>
    </BrowserRouter>
  );
}

export default App;
