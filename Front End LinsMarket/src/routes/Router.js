import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './../pages/HomePage/HomePage'
import LoginPage from './../pages/LoginPage/LoginPage'
import SignupPage from './../pages/SignupPage/SignupPage'
import ErrorPage from './../pages/ErrorPage/ErrorPage'
import DetailProductPage from '../pages/DetailProductPage/DetailProductPage'


const Router = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="signup" element={<SignupPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="/product/:id" element={<DetailProductPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default Router