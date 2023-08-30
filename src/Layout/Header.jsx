import React from 'react';


//dependencies
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { clearUser } from '../Redux/AuthRedux';

//css
import "../CSS/Header.css";
import Offcanvas from './Offcanvas';


const Header = () => {
   const dispatch = useDispatch();
   const email = useSelector(state => state.auth.email);
   const token = useSelector(state => state.auth.token );
   console.log(email,token);

   const hadnleLogOut = () =>{
      dispatch(clearUser());   
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
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/take-exam'>Take Exam</Link></li>
              <li><Link to='/attend-exam' >Attend Exam</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              {email && token ? <li><Link onClick={hadnleLogOut} to='/login'>logout</Link></li> :  <li><Link to='/login'>login</Link></li> }
             
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