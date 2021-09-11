import React from 'react'
import imageHome from '../../assets/imageHome.png'
import './header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Homem em Evolução</span>
                <span className="headerTitleLg">HOEV</span>
            </div>
            <img
                className="headerImg"
                src={imageHome} alt="Home Background"
            />
           
        </div>
    )
}
