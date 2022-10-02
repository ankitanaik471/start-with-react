import React from "react";


const Product = (props) => {
     let isAvailable = props.status;

     let active = 'text-xs rounded p-1 ';

     active += isAvailable === 'Available' ? 'bg-emerald-900' : 'bg-red-800';

    return  <div className="flex justify-between items-center bg-emerald-600 text-slate-50 p-4 rounded mb-4">
               <div>
                    <h2 className="text-2xl font-semibold">{props.name}</h2>
                    <p className="text-sm py-2">{props.desc}</p>
                    <div className="space-x-4">
                         <span className="text-base">{props.price}</span>
                         <span className={active}>{isAvailable}</span>
                    </div>
               </div>
               <div>
                    <img src={props.img}  alt="product one"/>
               </div>
            </div>
}

export default Product;