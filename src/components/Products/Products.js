import React from "react";
import Product from "./product/Product";

const Product_List = [
    {
        p_name: 'Product One',
        p_desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        p_price: '140.45',
        p_img: 'https://via.placeholder.com/150',
        p_available: 'Available'
    },
    {
        p_name: 'Product two',
        p_desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        p_price: '150.45',
        p_img: 'https://via.placeholder.com/150',
        p_available: 'Available'
    },
    {
        p_name: 'Product three',
        p_desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        p_price: '160.45',
        p_img: 'https://via.placeholder.com/150',
        p_available: 'Available'
    },
    {
        p_name: 'Product four',
        p_desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        p_price: '155.45',
        p_img: 'https://via.placeholder.com/150',
        p_available: 'unAvailable'
    }
]

const Products = () => {
    return <ul>
        <li>
            {
                Product_List.map((product) => console.log(product.p_desc))
            }
            <Product/>
        </li>
    </ul>
}

export default Products;