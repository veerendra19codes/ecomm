import React from 'react'

const Item = (props) => {
    return (
        <div className="item flex flex-col justify-center items-center w-[300px] gap-2">
            <img src={props.image} alt="">
            </img>
            <div className="text-xl font-normal">{props.name}</div>
            <div>{props.category}</div>
            <div className="prices flex flex-row">
                <div className="new-price">{props.new_price}</div>
                <div className="old-price line-through text-gray-400">{props.old_price}</div>
            </div>
        </div>
    )
}

export default Item
