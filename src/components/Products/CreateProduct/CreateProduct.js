import ProductForm from "./ProductForm";

const CreateProduct = (props) => {
   const onCreateProduct = (product) => {
      // console.log(product)

      props.createProduct(product);
   }

    return (
      <div>
            <ProductForm createProduct={onCreateProduct}></ProductForm>
      </div>
    )
}

export default CreateProduct;