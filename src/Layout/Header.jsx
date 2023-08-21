import React from 'react';


//dependencies
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { clearUserToken } from '../Redux/AuthRedux';

//css
import "../CSS/Header.css";
import Offcanvas from './Offcanvas';


const Header = () => {
   const dispatch = useDispatch();
   const user = useSelector(state => state.auth.user);
   console.log(user);

   const hadnleLogOut = () =>{
      dispatch(clearUserToken());   
      localStorage.removeItem('auth')
   }
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
              {!user ? <li><Link to='/login'>login</Link></li> :  <li><Link to='/login'>logut</Link></li> }
             
           </ul>
        </div>

        <div className="responsive-side-menu">
           <Offcanvas />
        </div>

     </header>
    </>
  )
}

export default Header