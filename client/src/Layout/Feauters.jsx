import React from "react";

//css
import "../CSS/Feauters.css"

//icons
import {BsFileEarmarkSpreadsheetFill} from 'react-icons/bs';
import {GiTeacher} from "react-icons/gi";
import {MdDashboard} from "react-icons/md";
import {BiSolidTimeFive} from "react-icons/bi";



const Feauters = () => {

  return (
    <>

      <section id="feauter">

        <div className="feauter-title">
          <h5 className="">give and take exam over online</h5>
        </div>

        <div className="feauter-flex">

          <div className="card-part">

            <div className="give-exam">
              <BsFileEarmarkSpreadsheetFill className="feauter-icon" />
                <div className="give-exam-details" style={{paddingLeft:'20px'}}>
               <p className="top">Give Exam over online</p>
               <p className="bottom">Lorem ipsum dolor sit amet consectetur  </p> 
               </div>
            </div>

            <div className="take-exam">
              <GiTeacher  className="feauter-icon" />
              <div className="take-exam-details" style={{paddingLeft:'20px'}} >
               <p className="top" >Take Exam over online</p>
               <p  className="bottom">Lorem ipsum dolor sit amet consectetur  </p> 
               </div>
            </div>

            <div className="see-result">
              <MdDashboard  className="feauter-icon" />
              <div className="see-result-details" style={{paddingLeft:'20px'}}>
               <p className="top" >See the result on the Dashboard</p>
               <p  className="bottom">Lorem ipsum dolor sit amet consectetur  </p> 
               </div>
            </div>

            <div className="others">
             <BiSolidTimeFive className="feauter-icon" />
              <div className="others-details" style={{paddingLeft:'20px'}}>
               <p className="top">Give Exam over online</p>
               <p  className="bottom">Lorem ipsum dolor sit amet consectetur  </p> 
               </div>
            </div>

          </div>

          <div className="image-part">
            <img className="img-fluid" src="feauter-section-img.png" alt="" />
          </div>

        </div>
      </section>
    </>
  );
};

export default Feauters;
