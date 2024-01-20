import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import { useLocation } from 'react-router-dom';


function Navbar(props) {
    const location = useLocation();
    const isAuth = location.state ? location.state.isAuth : false

  return (
    <nav>
        <div className='nav-cont'>
            <div className='home-route'>
            <Link to='/' className='nav home'>Logo</Link>
            </div>
            

            <div className='route-links'>
               {(!props.isAuthenticated && !isAuth )&& <Link to='/login'  className='nav login'>Login</Link>}
                {(!props.isAuthenticated && !isAuth ) && <Link to='/register' className='nav register'>Register</Link>}
                {(props.isAuthenticated||isAuth) && <Link to='/doubts' className='nav doubts'>Doubts</Link>}
                {(props.isAuthenticated||isAuth) && <Link to='/history' className='nav history'>History</Link>}
                {(props.isAuthenticated||isAuth) &&<Link to='/live' className='nav live'> Current Problems</Link>}
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar