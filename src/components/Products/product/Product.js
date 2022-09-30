import React from "react";


const Product = (props) => {
     let Available = 'Available';

    return  <div className="flex justify-between items-center bg-emerald-600 text-slate-50 p-4 rounded mb-4">
               <div>
                    <h2 className="text-2xl font-semibold">Product One</h2>
                    <p className="text-sm py-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                    <div className="space-x-4">
                         <span className="text-base">145.90</span>
                         <span className="text-xs rounded p-1 bg-emerald-900">{Available}</span>
                    </div>
               </div>
               <div>
                    <img src="https://via.placeholder.com/150" alt="product one"/>
               </div>
            </div>
}

export default Product;