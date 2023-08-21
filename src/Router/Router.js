import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//Pages
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register"

//component
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
