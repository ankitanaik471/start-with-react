import React from "react";
import Product from "./product/Product";



const Products = (props) => {
    
    return props.ProductList.length === 0 ? <h3>No products Available</h3> :
    (<ul>
        {
            props.ProductList.map((product) =>(
                <li key={product.id}>
                    <Product id={product?.id} name={product.p_name} desc={product.p_desc} price={product.p_price} img={product.p_img} status={product.p_available} stock={product.p_stock}/>
                </li>
            ))
        }
    </ul>)
}

export default Products;