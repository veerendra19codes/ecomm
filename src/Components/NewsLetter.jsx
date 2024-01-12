import React from 'react'

const NewsLetter = () => {
    return (
        <div className="w-full py-24 px-32 ">
            <div className="newsletter bg-blue-100 flex flex-col justify-center items-center w-full h-full py-24 gap-12">
                <div className="text-5xl font-extrabold">Get Exclusive Offers on you Email</div>
                <div className="text-xl text-gray-700 font-semibold">Subscribe to our newsletter and stay updated</div>
                <div className="input  flex flex-row justify-center items-center gap-8">
                    <input type="email" placeholder="type your email..." className="bg-transparent border-2 border-gray-600 h-12 px-4 rounded-full w-[350px]" />
                    <button className="bg-black text-white text-xl h-12 rounded-full px-8">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
