import React from "react";
import Logo from "../Logo";
import './Banner.css';

const Banner = () => {
    return(
        <header className="banner">
            <Logo />
            <img alt="banner" src="/imagens/banner.jpg" />
        </header>
    )
}

export default Banner;