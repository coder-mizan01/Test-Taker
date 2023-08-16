import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "../Pages/Home";

//component
import Header from "../Layout/Header";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
