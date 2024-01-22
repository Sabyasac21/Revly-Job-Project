import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
// import { useLocation } from 'react-router-dom';


function Navbar(props) {

  return (
    <nav>
        <div className='nav-cont'>
            <div className='home-route'>
            <Link to='/' className='nav home'>Logo</Link>
            </div>
            

            <div className='route-links'>
               {!props.isAuthenticated && <Link to='/login'  className='nav login'>Login</Link>}
                {!props.isAuthenticated && <Link to='/register' className='nav register'>Register</Link>}
                {(props.isAuthenticated && props.role==='student') && <Link to='/doubt' className='nav doubt-question'>Create Doubt</Link>}
                {props.isAuthenticated && <Link to='/doubts' className='nav doubts'>Doubts</Link>}
                {props.isAuthenticated && <Link to='/history' className='nav history'>History</Link>}
                {props.isAuthenticated &&<Link to='/live' className='nav live'> Current Problems</Link>}
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar