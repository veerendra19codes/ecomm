import React from 'react'
import hand_icon from "../Assets/hand_icon.png"
import arrow from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"

const Hero = () => {
    return (
        <div className="hero bg-blue-100 flex flex-row justify-around items-center w-full gap-24 py-4">
            <div className="left flex flex-col gap-8">
                <p className="text-4xl font-bold">NEW ARRIVALS ONLY</p>
                <div className="flex flex-row text-start items-center gap-4">
                    <p className="text-5xl font-extrabold">NEW</p>
                    <img src={hand_icon} alt="hand_icon" className="h-12 w-12"></img>
                </div>
                <p className="text-5xl font-extrabold">COLLECTIONS</p>
                <p className="text-5xl font-extrabold">FOR EVERYONE</p>
                <button className="bg-red-600 text-white text-2xl flex flex-row justify-center items-center rounded-full h-14 gap-4">
                    Latest Collection <span><img src={arrow} alt="arrow"></img></span>
                </button>
            </div>
            <div className="right">
                <img src={hero_image} alt="hero_image" className="h-[600px] "></img>
            </div>
        </div>
    )
}

export default Hero
