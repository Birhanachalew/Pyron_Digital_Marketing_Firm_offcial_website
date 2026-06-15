import React from 'react'
import HomeCta from '../components/home/HomeCta'
import HomeFeatures from '../components/home/HomeFeatures'
import HomeHero from '../components/home/HomeHero'
//import HomePortfolio from '../components/home/HomePortfolio'
import HomeServices from '../components/home/HomeServices'
import HomeWorks from '../components/home/HomeWorks'
import HomeTrust from '../components/home/HomeTrust'

function Home() {
    return (
        <div>
            <HomeHero/>

            <HomeServices/>

            <HomeFeatures/>

            <HomeWorks/>

            <HomeTrust/>

        
            <HomeCta/>

        </div>
    )
}

export default Home
