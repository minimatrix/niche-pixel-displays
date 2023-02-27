import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const NavigationMenu = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-black px-5">
            <div className="container-fluid d-flex">
                <a className="navbar-brand pt-3" href="#"><img width="200px" src="/npd.png" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href='/'><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/about'>
                                <a className="nav-link">About us</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/blog'>
                                <a className="nav-link">Blog</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/contact'>
                                <a className="nav-link">Contact</a>
                            </Link>
                        </li>
                        <li>
                            <div className="btn btn-xs mx-2 btn-primary" style={{ backgroundColor: "#0BC7D3", border: "white", borderRadius: 30 }}>
                                GET A QUOTE
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavigationMenu
