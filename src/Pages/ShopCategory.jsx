import React from 'react'
import banner_kids from "../Assets/banner_mens.png"
import banner_mens from "../Assets/banner_mens.png"
import banner_women from "../Assets/banner_women.png"


const ShopCategory = ({ category, banner }) => {
    return (
        <div className="shopcategory">
            <div className="banner">
                <img src={banner} alt="banner"></img>
            </div>
            <div className="">
                {category}
            </div>
        </div>
    )
}

export default ShopCategory
