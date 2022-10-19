import React, { useState } from "react";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import CreateProduct from "./components/Products/CreateProduct/CreateProduct";
import FilterProduct from "./components/Products/FilterProduct/FilterProduct";

const Product_List = [
  {
      id: 1,
      p_name: 'Product One test',
      p_desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      p_price: '140.45',
      p_img: 'https://via.placeholder.com/150',
      p_available: 'Available',
      p_stock: 10
  },
  {
      id: 2,
      p_name: 'Product two',
      p_desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      p_price: '150.45',
      p_img: 'https://via.placeholder.com/150',
      p_available: 'Available',
      p_stock: 10
  },
  {
      id: 3,
      p_name: 'Product three',
      p_desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      p_price: '160.45',
      p_img: 'https://via.placeholder.com/150',
      p_available: 'Available',
      p_stock: 10
  },
  {
      id: 4,
      p_name: 'Product four',
      p_desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      p_price: '155.45',
      p_img: 'https://via.placeholder.com/150',
      p_available: 'unAvailable',
      p_stock: 10
  }
]

function App() {
  let [productList, updateProductlist] = useState(Product_List);

  let [filteredProduct, updateFilteredProduct] =useState('all');

  let filteredProductList = productList.filter((product) => {
    if(filteredProduct === 'Available'){
      return product.p_available === 'Available';
    } else if (filteredProduct === 'unAvailable'){
      return product.p_available === 'unAvailable';
    } else{
      return product;
    }
  })

  const OnCreateProductEvent = (product) => {
    console.log(product, productList)
    updateProductlist([product, ...productList]);
  }

  const onFilterProductEvent = (filter) => {
    updateFilteredProduct(filter);
  }

  return (
    <div className="App">
      <Header />
      <div className="flex justify-between">
        <div className="grow p-4">
          <CreateProduct createProduct={OnCreateProductEvent} />
          <FilterProduct filterProduct={onFilterProductEvent} />
          <Products ProductList={filteredProductList} />
        </div>
        <div className="p-4">
          <Sidebar/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
