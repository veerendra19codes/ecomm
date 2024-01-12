import React from 'react'
import new_collections from "../Assets/new_collections.js"
import Item from './Item'

const NewCollections = () => {
    return (
        <div>
            <div className="new-collections flex flex-col justify-center items-center w-full mt-12">
                <div className="heading text-4xl font-bold mb-4">NEW COLLECTIONS</div>
                <div className="popular-items grid grid-cols-4 gap-8">
                    {new_collections.map((item) => {
                        return (
                            <div key={item.id}>
                                <Item key={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default NewCollections
