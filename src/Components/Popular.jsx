import React from 'react'
import popular_collection from '../Assets/popularcollection.js'
import Item from './Item'

const Popular = () => {
    return (
        <div className="popular-in-women flex flex-col justify-center items-center w-full mt-12">
            <div className="heading text-4xl font-bold mb-4">POPULAR IN WOMEN</div>
            <div className="popular-items grid grid-cols-4 gap-8">
                {popular_collection.map((item) => {
                    return (
                        <div key={item.id}>
                            <Item key={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Popular
