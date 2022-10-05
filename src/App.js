import React from "react";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import CreateProduct from "./components/Products/CreateProduct/CreateProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex justify-between">
        <div className="grow p-4">
          <Products />
          <CreateProduct />
        </div>
        <div className="p-4">
          <Sidebar/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
