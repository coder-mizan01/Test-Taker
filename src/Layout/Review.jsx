import Slider from "react-slick";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//css
import "../CSS/Review.css";

//icons
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

import {BsFillArrowRightSquareFill,BsFillArrowLeftSquareFill} from "react-icons/bs"



const CenterMode    = () => {
  var settings = {

    dots: true,
    infinite: false,
    class:'slider',
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: <BsFillArrowLeftSquareFill className="custom-prev-arrow" />,
    nextArrow: <BsFillArrowRightSquareFill className="custom-next-arrow" />,
    
  };

  return (
    
    <section id="review-slider">
      <h2>our reviews</h2>
      
      <Slider {...settings} className="slider">

        <div className="review">
          <div className="top">
            <img src="s.jpg" alt="" />
            <div className="details">
              <p>mizanur rahman</p>
              <AiFillFacebook />
              <AiFillLinkedin />
              <AiFillTwitterSquare />
            </div>
          </div>
           <hr />
          <div className="bottom">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
              et"
            </p>
          </div>
        </div>

        <div className="review">
          <div className="top">
            <img src="s.jpg" alt="" />
            <div className="details">
              <p>mizanur rahman</p>
              <AiFillFacebook />
              <AiFillLinkedin />
              <AiFillTwitterSquare />
            </div>
          </div>
          <hr />
          <div className="bottom">
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
              et"
            </p>
          </div>
        </div>

        <div className="review">
          <div className="top">
            <img src="s.jpg" alt="" />
            <div className="details">
              <p>mizanur rahman</p>
              <AiFillFacebook />
              <AiFillLinkedin />
              <AiFillTwitterSquare />
            </div>
          </div>
          <hr />
          <div className="bottom">
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
              et"
            </p>
          </div>
        </div>
        
        <div className="review">
          <div className="top">
            <img src="s.jpg" alt="" />
            <div className="details">
              <p>mizanur rahman</p>
              <AiFillFacebook />
              <AiFillLinkedin />
              <AiFillTwitterSquare />
            </div>
          </div>
          <hr />
          <div className="bottom">
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
              et"
            </p>
          </div>
        </div>

        <div className="review">
          <div className="top">
            <img src="s.jpg" alt="" />
            <div className="details">
              <p>mizanur rahman</p>
              <AiFillFacebook />
              <AiFillLinkedin />
              <AiFillTwitterSquare />
            </div>
          </div>
           <hr />
          <div className="bottom">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
              et"
            </p>
          </div>
        </div>


      </Slider>
    </section>
  );
};

export default CenterMode   ;
