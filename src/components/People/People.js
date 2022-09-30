import React from "react";

const People = (props) => {
    return <span className=" flex">
                <img className="h-10 w-10 rounded-full" src={props.image} alt="" />
                <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{props.name}</p>
                    <p className="text-sm text-gray-500">{props.email}</p>
                </div>
            </span>
}

export default People;
