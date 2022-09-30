import React from "react";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import Peoples from "./components/People/Peoples";

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Peoples />
    </div>
  );
}

export default App;
