import React from 'react';
import './Home.css';
import { useLocation, useNavigate } from 'react-router-dom';
import TeacherDashboard from './TeacherDashboard';
import StudentDashboard from './StudentDashboard';

function Home(props) {
  const location = useLocation();
  const isAuth = location.state ? location.state.isAuth : false;
  const navigate = useNavigate()
    
  return (
    <>
        {(!props.isAuthenticated) && <div className='user-status'>
            <h1>
            Register to get onBoard
            </h1>
        </div>}


        
        {(props.isAuthenticated) && <div className='user-status'>
          {props.user.role==='teacher' ? (<TeacherDashboard/>):(<StudentDashboard/>)}
          {props.children}
            
        </div>}
        
       
    
    </>
    
    
    
    
  )
}

export default Home