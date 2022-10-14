import React, {useState} from "react";

const ProductForm = (props) => {
    let [name, setName] = useState('');
    let [description, setDescription] = useState('');
    let [price, setPrice] = useState('');
    let [available, setAvailability] = useState(false);
    let [image, setImage] = useState('');

    // let [userInput, setUserInput] = useState({
    //   name: '',
    //   price: '',
    //   description: '',
    //   available: '',
    //   image: ''
    // })

    const addProductNameInputHandler = (e) => {
        setName(e.target.value);

        // setUserInput({
        //     ...userInput,
        //     name: e.target.value
        // })

        // By Callback functions 
        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         name: e.target.value
        //     }
        // })
    }

    const addProductPriceInputHandler = (e) => {
        setPrice(e.target.value)

        // setUserInput({
        //     ...userInput,
        //     price: e.target.value
        // })
    }

    const addProductDescriptionInputHandler = (e) => {
        setDescription(e.target.value)
        
        // setUserInput({
        //     ...userInput,
        //     description: e.target.value
        // })
    }

    const avilabilityInputHandler = (e) => {
        setAvailability(e.target.checked) 

        // setUserInput({
        //     ...userInput,
        //     available: e.target.checked
        // })
    }

    const imageInputHandler = (e) => {
        setImage(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     image: e.target.value
        // })

        // console.log(userInput);
    }

    const addProductEventListner = (event) => {
        console.log('clicked')

        event.preventDefault();

        let Product = {
            id: Math.random(),
            p_name: name,
            p_price: Number(price),
            p_desc: description,
            p_available: Boolean(available) === true ? 'Available': 'unAvailable',
            p_img: image === 'random path' ? '' : 'https://via.placeholder.com/150'
        }

        // console.log(Product)

        props.createProduct(Product);

        setName('');
        setPrice('');
        setAvailability(false);
        setDescription('');
        setImage('');
    }

    return (
    <form onSubmit={addProductEventListner}>
        <div className="flex flex-col md:flex-row md:space-x-4 md:mb-4">
            <div className="md:basis-1/2">
                <label className="mr-2">Product Name: </label>    
                <input value={name} onChange={addProductNameInputHandler} type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
            </div>
            <div className="md:basis-1/2">
                <label className="mr-2">Product Price: </label>    
                <input value={price} onChange={addProductPriceInputHandler} type="number" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
            </div>
        </div>

        <div className="md:mb-4">
            <label className="mr-2">Product Description: </label>    
            <input value={description} onChange={addProductDescriptionInputHandler} type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
        </div>

        <div className="md:mb-4">
            <label className="mr-2">Is given product Available ? </label>    
            <input checked={available} onChange={avilabilityInputHandler} type="checkbox"  className="accent-pink-500"/>
        </div>

        <div className="md:mb-4">
            <label className="mr-2">Select Product Image</label>    
            <input value={image} onChange={imageInputHandler} type="file"/>
        </div>

        <button type="submit" className="pointer-events-auto rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">Submit</button>
        <button type="button" onClick={props.onCancel} className="pointer-events-auto rounded-md bg-indigo-600 py-2 px-3 mx-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">Cancel</button>
    </form>
        
    )
}

export default ProductForm;