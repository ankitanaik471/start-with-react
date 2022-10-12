const FilterProduct = (props) => {

    const onFilterProductChange = (filter) => {
        props.filterProduct(filter.target.value);
    }

    return <div className="py-3">
        <select onChange={onFilterProductChange} className="px-4 py-3 rounded-full border border-solid border-neutral-900">
            <option value="all">All</option>
            <option value="Available">Available</option>
            <option value="unAvailable">unAvailable</option>
        </select>
    </div>
}

export default FilterProduct;