import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Mens, Womens, Kids, Cart, Login, Signup, ShopCategory } from "./Pages/index.js"
import Navbar from './Components/Navbar.jsx'
import Products from './Components/Products.jsx'
import banner_kids from "./Assets/banner_kids.png"
import banner_mens from "./Assets/banner_mens.png"
import banner_women from "./Assets/banner_women.png"



import './App.css'
import Footer from './Components/Footer.jsx'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/mens' element={<ShopCategory category="mens" banner={banner_mens} />} ></Route>
          <Route path='/womens' element={<ShopCategory category="womens" banner={banner_women} />} ></Route>
          <Route path='/kids' element={<ShopCategory category="kids" banner={banner_kids} />} ></Route>
          <Route path="/product/:productId" element={<Products />}></Route>
          <Route path='/cart' element={<Cart />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/signup' element={<Signup />} ></Route>

        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
