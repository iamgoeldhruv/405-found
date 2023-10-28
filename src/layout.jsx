import React from 'react'
import Headers from './components/header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/foooter'
// import './App.css'
import Polygon from './components/polygon/polygon'


export function Layout() {
    return (
        <>
            <Headers/>
            <Outlet/>
            {/* <Polygon/> */}
            <Footer/>
        </>
    )
}