import React, {useState} from "react";

const ProductForm = () => {
    // let [name, setName] = useState('');
    // let [description, setDescription] = useState('');
    // let [price, setPrice] = useState('');
    // let [available, setAvailability] = useState('');
    // let [image, setImage] = useState('');

    let [userInput, setUserInput] = useState({
      name: '',
      price: '',
      description: '',
      available: '',
      image: ''
    })

    const addProductNameInputHandler = (e) => {
        // setUserInput({
        //     ...userInput,
        //     name: e.target.value
        // })

        // By Callback functions 
        setUserInput((previousState) => {
            return {
                ...previousState,
                name: e.target.value
            }
        })
    }

    const addProductPriceInputHandler = (e) => {
        setUserInput({
            ...userInput,
            price: e.target.value
        })
    }

    const addProductDescriptionInputHandler = (e) => {
        setUserInput({
            ...userInput,
            description: e.target.value
        })
    }

    const avilabilityInputHandler = (e) => {
        setUserInput({
            ...userInput,
            available: e.target.checked
        })
    }

    const imageInputHandler = (e) => {
        setUserInput({
            ...userInput,
            image: e.target.value
        })

        console.log(userInput);
    }

    const addProductEventListner = () => {
        console.log('clicked')
    }
    return (
    <form>
        <div className="flex flex-col md:flex-row md:space-x-4 md:mb-4">
            <div className="md:basis-1/2">
                <label className="mr-2">Product Name: </label>    
                <input onChange={addProductNameInputHandler} type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
            </div>
            <div className="md:basis-1/2">
                <label className="mr-2">Product Price: </label>    
                <input onChange={addProductPriceInputHandler} type="number" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
            </div>
        </div>

        <div className="md:mb-4">
            <label className="mr-2">Product Description: </label>    
            <input onChange={addProductDescriptionInputHandler} type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
        </div>

        <div className="md:mb-4">
            <label className="mr-2">Is given product Available ? </label>    
            <input onChange={avilabilityInputHandler} type="checkbox"  className="accent-pink-500"/>
        </div>

        <div className="md:mb-4">
            <label className="mr-2">Select Product Image</label>    
            <input onChange={imageInputHandler} type="file"/>
        </div>

        <button onClick={addProductEventListner} className="pointer-events-auto rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500" type="submit">Submit</button>
    </form>
        
    )
}

export default ProductForm;