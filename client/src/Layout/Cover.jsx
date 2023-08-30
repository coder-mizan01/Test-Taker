import React from "react";


//css
import "../CSS/Cover.css";
import { Link } from "react-router-dom";

const Cover = () => {
  return (
    <section id="cover">

      <div className="cover-title">
        <h2>
          This Website is used to be give exam and take exam
        </h2>
        <div className="cover-buttons">
          <Link to='/take-exam' className="take-exam">Take Exam</Link>
          <Link to='/attend-exam' className="give-exam">Give Exam</Link>
        </div>
      </div>

      <div className="cover-image">
        <img src="coverimage.avif" className="img-fluid" alt="" />
      </div>

    </section>
  );
};

export default Cover;
