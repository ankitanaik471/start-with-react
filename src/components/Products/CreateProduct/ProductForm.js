import React, {useState} from "react";

const ProductForm = () => {
    let [name, setName] = useState('');
    let [description, setDescription] = useState('');
    let [price, setPrice] = useState('');
    let [available, setAvailability] = useState('');
    let [image, setImage] = useState('');

    const addProductNameInputHandler = (e) => {
        setName(e.target.value);
    }

    const addProductPriceInputHandler = (e) => {
        setPrice(e.target.value);
    }

    const addProductDescriptionInputHandler = (e) => {
        setDescription(e.target.value)
    }

    const avilabilityInputHandler = (e) => {
        setAvailability(e.target.checked);
    }

    const imageInputHandler = (e) => {
        setImage(e.target.value);
    }

    const addProductEventListner = () => {
        console.log('clicked')
    }
    return (
    <form>
        <div className="flex flex-col md:flex-row md:space-x-4 md:mb-4">
            <div className="md:basis-1/2">
                <label className="mr-2">Product Name: </label>    
                <input id={name} onChange={addProductNameInputHandler} type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
            </div>
            <div className="md:basis-1/2">
                <label className="mr-2">Product Price: </label>    
                <input id={price} onChange={addProductPriceInputHandler} type="number" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
            </div>
        </div>

        <div className="md:mb-4">
            <label className="mr-2">Product Description: </label>    
            <input id={description} onChange={addProductDescriptionInputHandler} type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
        </div>

        <div className="md:mb-4">
            <label className="mr-2">Is given product Available ? </label>    
            <input id={available} onChange={avilabilityInputHandler} type="checkbox"  className="accent-pink-500"/>
        </div>

        <div className="md:mb-4">
            <label className="mr-2">Select Product Image</label>    
            <input id={image} onChange={imageInputHandler} type="file"/>
        </div>

        <button onClick={addProductEventListner} className="pointer-events-auto rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500" type="submit">Submit</button>
    </form>
        
    )
}

export default ProductForm;