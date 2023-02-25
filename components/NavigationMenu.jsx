import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const NavigationMenu = () => {

    // return (

    //     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    //         <div class="container-fluid">
    //             <a class="navbar-brand" href="#">Niche Pixcel Displays</a>
    //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span class="navbar-toggler-icon"></span>
    //             </button>
    //             <div class="collapse navbar-collapse" id="navbarNav">
    //                 <ul class="navbar-nav">
    //                     <li class="nav-item">

    //                         <Link href='/'><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
    //                     </li>
    //                     <li class="nav-item">
    //                         <Link href='/about'>
    //                             <a class="nav-link">About us</a>
    //                         </Link>
    //                     </li>
    //                     <li class="nav-item">
    //                         <Link href='/blog'>
    //                             <a class="nav-link">Blog</a>
    //                         </Link>
    //                     </li>
    //                     <li class="nav-item">
    //                         <Link href='/contact'>
    //                             <a class="nav-link">Contact</a>
    //                         </Link>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </nav>
    // )




    return (
        <>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/blog'><a>Blog</a></Link>

        </>

    )
}

export default NavigationMenu
