import React from "react"

import logo from "../../assets/logo_color.png"

import "./index.scss"

const Header = () => {
    return (
        <header className="header">
            <img
                className="logo"
                src={logo}
                alt="Compound logo in Lambda School red"
            />
        </header>
    )
}

export default Header
