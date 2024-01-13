import React from 'react'
import logo from '../../assets/logo/logo.png'

function Logo() {
    return (
        <div className="logo mt-12">
            <a href="/">
                <div className="flex items-center gap-1">
                    <img src={logo} alt="zzz" />
                    <h1 className="heading-md to-gray-200 opacity-80">Weather App</h1>
                </div>
            </a>
        </div>
    )
}

export default Logo