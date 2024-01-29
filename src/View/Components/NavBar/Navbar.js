import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
// import { useLocation } from 'react-router-dom';


function Navbar(props) {

  return (
    <nav>
        <div className='nav-cont'>
            <div className='home-route'>
            <Link to={props.isAuthenticated? `/${props.user._id}`:'/'} className='nav home'>Logo</Link>
            </div>
            

            <div className='route-links'>
               {!props.isAuthenticated && <Link to='/login'  className='nav login'>Login</Link>}
                {!props.isAuthenticated && <Link to='/register' className='nav register'>Register</Link>}
                {(props.isAuthenticated && props.user.role==='student') && <Link to='/doubt' className='nav doubt-question'>Create Doubt</Link>}
                {props.isAuthenticated && <Link to={props.user.role==='student'?'/doubts': '/teacher/doubts'} className='nav doubts'>Doubts</Link>}
                {props.isAuthenticated && <Link to={props.user.role==='student'?'/history': '/teacher/history'}  className='nav history'>History</Link>}
                {props.isAuthenticated &&<Link to={props.user.role==='student'?'/live': '/teacher/live'}  className='nav live'> Current Problems</Link>}
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar