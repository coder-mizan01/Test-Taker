import Slider from "react-slick";
import React from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//css
import "../CSS/Review.css"

 const CenterMode = () =>{
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };

      return (
        <Slider {...settings}>
        <div>
         <img src="s.jpg" alt="" />
        </div>
        <div>
        <img src="s.jpg" alt="" />
        </div>
        <div>
        <img src="s.jpg" alt="" />
        </div>
        <div>
        <img src="s.jpg" alt="" />
        </div>
        <div>
        <img src="s.jpg" alt="" />  
        </div>

        <div>
        <img src="s.jpg" alt="" />  
        </div>
      </Slider>
      )
}

export default CenterMode