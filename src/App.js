import React from "react";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex justify-between">
        <div className="grow p-4">
          <Products />
        </div>
        <div className="p-4">
          <Sidebar/>
        </div>
      </div>
    </div>
  );
}

export default App;
