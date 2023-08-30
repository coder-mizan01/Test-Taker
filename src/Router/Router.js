import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//Pages
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AttendExam from "../Pages/AttendExam";
import TakeExam from "../Pages/TakeExam";
import Contact from "../Pages/Contact";

//component
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import QuestionPaper from "../Component/QuestionPaper"
import AllQuestion from "../Component/AllQuestion";
import Result from "../Component/Result";


const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact /> } />
          <Route path="/register" element={<Register />} />
          <Route path="/attend-exam" element={<AttendExam />} />
          <Route path="/question-paper" element={<QuestionPaper />} />
          <Route path="/take-exam" element={<TakeExam />} />
          <Route path="/allquestion" element={<AllQuestion /> } />
          <Route path="/result" element={<Result /> } />
         </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
