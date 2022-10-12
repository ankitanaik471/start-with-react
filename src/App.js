import React, { useState } from "react";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import CreateProduct from "./components/Products/CreateProduct/CreateProduct";

const Product_List = [
  {
      id: 1,
      p_name: 'Product One test',
      p_desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      p_price: '140.45',
      p_img: 'https://via.placeholder.com/150',
      p_available: 'Available'
  },
  {
      id: 2,
      p_name: 'Product two',
      p_desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      p_price: '150.45',
      p_img: 'https://via.placeholder.com/150',
      p_available: 'Available'
  },
  {
      id: 3,
      p_name: 'Product three',
      p_desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      p_price: '160.45',
      p_img: 'https://via.placeholder.com/150',
      p_available: 'Available'
  },
  {
      id: 4,
      p_name: 'Product four',
      p_desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      p_price: '155.45',
      p_img: 'https://via.placeholder.com/150',
      p_available: 'unAvailable'
  }
]

function App() {
  let [productList, updateProductlist] = useState(Product_List);

  const OnCreateProductEvent = (product) => {
    console.log(product, productList)
    updateProductlist([product, ...productList]);
  }

  return (
    <div className="App">
      <Header />
      <div className="flex justify-between">
        <div className="grow p-4">
          <Products ProductList={productList} />
          <CreateProduct createProduct={OnCreateProductEvent} />
        </div>
        <div className="p-4">
          <Sidebar/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
