import React from "react";

//packages
import { Link } from "react-router-dom";

//icons
import { RiMenu3Fill } from "react-icons/ri";
import {RiCloseLine} from "react-icons/ri"


//css as object

const offCanvasButton = {
  backgroundColor: "#0D084D",
  border: "none",
  padding: "5px 10px",
  borderRadius: "5px",
};

const offcanvasMenuIcon = {
  color: "white",
  fontSize: "1.5rem",
};

const offcanvasLogo = {
  fontSize: "1.5rem",
  textTransform: "uppercase",
  textDecoration: "none",
  color: "#121250",
  fontFamily: "'Times New Roman', Times, serif ",
  fontWeight: "800",
  marginLeft : '8px'
};

const offcanvasCloseButton = {
  backgroundColor: "#0D084D",
  marginRight : '10px',
  padding : '2px 5px',
  border : 'none',
  opacity : '1',
  color: "white",
  borderRadius : '0px'
}

const offcanvasCloseIcon = {
  color: "white",
  fontSize : '1.5rem'
}

const offcanvasUnorderlist = {
   padding : '0px',
   margin : '0px'
}

const orderList = {
   display : 'grid',
   listStyleType : 'none',
   textAlign : 'center',
   margin : '20px 0px'

}

const anchor = {
  width : '100%',
  textDecoration:'none',
  color : '#121250',
  fontSize : '1.2rem'
}

const Offcanvas = () => {
  return (
    <>
      <button
        style={offCanvasButton}
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <RiMenu3Fill style={offcanvasMenuIcon} />
      </button>

      <div
        className="offcanvas offcanvas-start"
        style={{backgroundColor:'#F3F7FF',width:'20rem'}}
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header mt-3 mb-3">
          <div className="offcanvas-logo-div">
            <Link to="/" style={offcanvasLogo}>
              Test Taker
            </Link>
          </div>

          <button
            style={offcanvasCloseButton}
            type="button"
            className="text-white rounded"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          > <RiCloseLine style={offcanvasCloseIcon} /></button>
          
        </div>

        <div className="offcanvas-body" >
          <ul className="responsive-menu" style={offcanvasUnorderlist}>
            <li style={orderList}>
              <Link style={anchor}>Home</Link>
            </li>
            <li style={orderList}>
              <Link style={anchor} >Take Exam</Link>
            </li>
            <li style={orderList}>
              <Link style={anchor} >Attend Exam</Link>
            </li>
            <li style={orderList}>
              <Link style={anchor} >Contact</Link>
            </li>
            <li style={orderList}>
              <Link style={anchor} >About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Offcanvas;
