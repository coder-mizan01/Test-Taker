import React from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { setUserToken } from "../Redux/AuthRedux";

//css
import "../CSS/Feauters.css"

//icons
import {BsFileEarmarkSpreadsheetFill} from 'react-icons/bs';
import {GiTeacher} from "react-icons/gi";
import {MdDashboard} from "react-icons/md";
import {BiSolidTimeFive} from "react-icons/bi";



const Feauters = () => {
  /*const user = useSelector(state => state.auth.user);
  const token = useSelector(state => state.auth.token)*/
  return (
    <>
      {/* <div>{JSON.stringify( user ,null,4)}{JSON.stringify( token ,null,4)}</div> */}

      <section id="feauter">

        <div className="feauter-title">
          <h5 className="">give and take exam over online</h5>
        </div>

        <div className="feauter-flex">

          <div className="card-part">

            <div className="give-exam">
              <BsFileEarmarkSpreadsheetFill />
                <div className="give-exam-details">
               <p>Give Exam over online</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p> 
               </div>
            </div>

            <div className="take-exam">
              <GiTeacher />
              <div className="take-exam-details">
               <p>Take Exam over online</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p> 
               </div>
            </div>

            <div className="see-result">
              <MdDashboard />
              <div className="see-result-details">
               <p>See the result on the Dashboard</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p> 
               </div>
            </div>

            <div className="others">
             <BiSolidTimeFive />
              <div className="others-details">
               <p>Give Exam over online</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p> 
               </div>
            </div>

          </div>

          <div className="image-part">
            <img src="feauter-section-img.png" alt="" />
          </div>

        </div>
      </section>
    </>
  );
};

export default Feauters;
