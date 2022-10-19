import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./../pages/HomePage/HomePage";
import LoginPage from "./../pages/LoginPage/LoginPage";
import SignupPage from "./../pages/SignupPage/SignupPage";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import DetailProductPage from "../pages/DetailProductPage/DetailProductPage";
import CartPage from "../pages/CartPage/CartPage";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import AdressPage from "../pages/AdressPage/AdressPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AdminLoginPage from "../pages/Admin/AdminLoginPage/AdminLoginPage";
import AdminPage from "../pages/Admin/AdminPage/AdminPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="signup" element={<SignupPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/product/:id" element={<DetailProductPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/adress" element={<AdressPage />}></Route>
        <Route path="/payment" element={<PaymentPage />}></Route>
        <Route path="/admin" element={<AdminLoginPage />}></Route>
        <Route path="/adminHome" element={<AdminPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
