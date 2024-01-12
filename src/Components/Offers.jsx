import React from 'react'
import exclusive_image from "../Assets/exclusive_image.png"

const Offers = () => {
    return (
        <div className="w-full py-32 px-24 ">
            <div className="hero bg-blue-100 flex flex-row justify-around items-center w-full gap-24 py-4">
                <div className="left flex flex-col gap-8">

                    <p className="text-5xl font-extrabold">EXCLUSIVE</p>
                    <p className="text-5xl font-extrabold">OFFERS FOR YOU</p>
                    <p className="text-2xl font-bold">ONLY ON BEST SELLER PRODUCTS</p>

                    <button className="bg-red-600 text-white text-2xl rounded-full h-14 ">
                        Check Now
                    </button>
                </div>
                <div className="right">
                    <img src={exclusive_image} alt="hero_image" className="h-[600px] "></img>
                </div>
            </div>
        </div>
    )
}

export default Offers
