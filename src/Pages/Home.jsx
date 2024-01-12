import React from 'react'
import Hero from '../Components/Hero'
import Popular from '../Components/Popular'
import Offers from '../Components/Offers'
import NewCollections from '../Components/NewCollections'
import NewsLetter from '../Components/NewsLetter'

const Home = () => {
    return (
        <div className="home w-full h-full flex flex-col justify-center items-center">

            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetter />
        </div>
    )
}

export default Home
