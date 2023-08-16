import React from 'react';


//dependencies
import { Link } from 'react-router-dom';

//css
import "../CSS/Header.css";


const Header = () => {
  return (
    <>
     <header id='header'>

        <div className="logo-div">
           <Link to='/'>Test Taker</Link>
        </div>

        <div className="menu">
           <ul className=''>
              <li><Link>Home</Link></li>
              <li><Link>Take Exam</Link></li>
              <li><Link>Attend Exam</Link></li>
              <li><Link>Contact</Link></li>
              <li><Link>About Us</Link></li>
           </ul>
        </div>
     </header>
    </>
  )
}

export default Header