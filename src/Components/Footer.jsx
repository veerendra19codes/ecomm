import React from 'react'
import logo_big from "../Assets/logo_big.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pinterest_icon from "../Assets/pinterest_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"

const Footer = () => {
    return (
        <div className="footer flex flex-col justify-center items-center gap-8 bg-gray-100 py-4">
            <div className="footer-logo flex flex-row justify-center items-center">
                <img src={logo_big} alt="logo_big"></img>
                <p className="text-3xl font-semibold">SHOP</p>
            </div>
            <div className="footer-links flex flex-row gap-8">
                <div>Company</div>
                <div>Products</div>
                <div>Offices</div>
                <div>About</div>
                <div>Contact</div>
            </div>
            <div className="social-icons flex flex-row gap-8">
                <img src={instagram_icon} alt="instagram_icon"></img>
                <img src={pinterest_icon} alt="pinterest_icon"></img>
                <img src={whatsapp_icon} alt="whatsapp_icon"></img>
            </div>
            <div className="copyright py-6 bg-gray-300 w-full flex justify-center items-center">
                Copyright @2024 - All Rights Reserved
            </div>
        </div>
    )
}

export default Footer
