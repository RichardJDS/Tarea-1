import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutPage, ChessPage, HomePage } from '../pages'
import { Navbar } from '../ui/Navbar'


export const RouterApp = () => {
    
  return (
    <>
    <Navbar />
    
    <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/chess' element={<ChessPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/*' element={<HomePage />} />
    </Routes>
    
    </>
  )
}
