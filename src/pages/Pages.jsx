import React from 'react'
import Home from './Home'
import { Searched } from './Searched'
import { Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'

function Pages() {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:type' element={<Cuisine />} />
            <Route
                path='/searched/:search'
                element={<Searched />}
            />
        </Routes>

    )
}

export default Pages