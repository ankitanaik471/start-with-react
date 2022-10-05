
const ProductForm = () => {
    return (
    <form>
        <div className="flex flex-col md:flex-row md:space-x-4 md:mb-4">
            <div className="md:basis-1/2">
                <label className="mr-2">Product Name: </label>    
                <input type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
            </div>
            <div className="md:basis-1/2">
                <label className="mr-2">Product Name: </label>    
                <input type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
            </div>
        </div>

        <div className="md:mb-4">
            <label className="mr-2">Product Description: </label>    
            <input type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
        </div>

        <button className="pointer-events-auto rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500" type="submit">Submit</button>
    </form>
        
    )
}

export default ProductForm;