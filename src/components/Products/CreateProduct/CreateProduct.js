import { useState } from "react";
import ProductForm from "./ProductForm";

const CreateProduct = (props) => {
   let [showForm, updateForm] = useState(false);

   const onCreateProductShow = () => {
      updateForm(true);
   }

   const onCancelProductShow = () => {
      updateForm(false);
   }

   const onCreateProduct = (product) => {
      // console.log(product)

      props.createProduct(product);
   }

    return (
      <div>
           { !showForm && <button onClick={onCreateProductShow} className="border border-solid border-neutral-900 py-2 px-3 rounded-full">Create New Product</button>}
            { showForm && <ProductForm  onCancel={onCancelProductShow} createProduct={onCreateProduct}></ProductForm>}
      </div>
    )
}

export default CreateProduct;