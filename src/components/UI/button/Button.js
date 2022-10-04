const Button = (props) => {
    return <button className="pointer-events-auto ml-8 rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">
                {props.children}
            </button>
                         
}

export default Button;