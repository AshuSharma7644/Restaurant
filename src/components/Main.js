import React from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Main