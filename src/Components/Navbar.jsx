import React from 'react'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from "react-router-dom"

const Navbar = () => {
    const navbarData = [
        {
            id: 1,
            name: "Home",
            link: "",
        },
        {
            id: 2,
            name: "Mens",
            link: "/mens",
        },
        {
            id: 3,
            name: "Womens",
            link: "/womens",
        },
        {
            id: 4,
            name: "Kids",
            link: "/kids",
        },
    ]
    return (
        <div className="navbar flex flex-row justify-around px-4 h-16 top-0 w-full">
            <div className="logo flex flex-row justify-center items-center gap-4">
                <img src={logo} alt="logo" ></img>
                <p>SHOP</p>
            </div>

            <div className="navlinks flex flex-row justify-center items-center gap-8">
                {navbarData.map((item) => {
                    return (
                        <div key={item.id}>
                            <Link className="navlink" to={item.link}>
                                {item.name}
                            </Link>
                        </div>
                    )
                })}
            </div>

            <div className="login-and-cart flex flex-row justify-center items-center gap-4">
                <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>

                <Link to="/cart">
                    <div className="flex flex-row justify-center items-center">
                        <img src={cart_icon} alt="cart-icon"></img>
                        <p className="h-6 w-6 flex justify-center items-center bg-yellow-600 text-white rounded-full -ml-4 -mt-6">0</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
