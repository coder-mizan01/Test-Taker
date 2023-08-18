import React from "react";

//css
import "../CSS/Cover.css";

const Cover = () => {
  return (
    <section id="cover">
    
        <div className="cover-title">
           <h2>This Website is used to be take Exam or give exam</h2>
        </div>

        <div className="cover-image">
          <img src="coverimage.avif" className="img-fluid" alt="" />
        </div>
  </section>
  )
};

export default Cover;
