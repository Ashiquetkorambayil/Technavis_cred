import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import Categories from './Admin/Categories'
import Dishes from './Admin/Dishes'
import Home from './Client/Home'
import Menu from './Client/Menu'
import Aboutus from './Client/Aboutus'
function MainRouter() {
  return (
    <div>



        <Routes>
            <Route>
            <Route path="/" element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="categories" element={<Categories />} />
            <Route path="dishes" element={<Dishes />} />
            </Route>
        </Routes>
    </div>
  )
}

export default MainRouter