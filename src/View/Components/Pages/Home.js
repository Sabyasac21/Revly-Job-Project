import React from 'react';
import './Home.css';
import { useLocation } from 'react-router-dom';
import TeacherDashboard from './TeacherDashboard';

function Home(props) {
  const location = useLocation();
  const isAuth = location.state ? location.state.isAuth : false;
    
  return (
    <>
        {(!props.isAuth&&!isAuth) && <div className='user-status'>
            <h1>
            Register to get onBoard
            </h1>
        </div>}


        
        {(props.isAuth|| isAuth) && <div className='user-status'>
            <TeacherDashboard/>
        </div>}
        
       
    
    </>
    
    
    
    
  )
}

export default Home