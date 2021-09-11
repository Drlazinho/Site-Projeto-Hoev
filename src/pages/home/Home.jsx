import React from 'react'
import Comunity from '../../components/comunity/Comunity'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Offers from '../../components/offers/Offers'
import './home.css'

export default function Home() {
    return (
        <div className="home">
         <Header/>
         <Comunity/>
         <Offers/>
         <Footer/>

        </div>
    )
}
