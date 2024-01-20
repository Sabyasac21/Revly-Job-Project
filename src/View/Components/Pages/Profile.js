import React, { useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Profile() {

  
  
  return (
    <div className="profile-container">
      <div className="profile-heading">
        <h2>Please choose your profile type</h2>
      </div>
      <div className="profile-options">

        <Link to='./studentId'>
        <div className="profile-box">
            <FontAwesomeIcon icon={faUser} size="7x" />
            <p>Student</p>
          </div>
          </Link>
          
          <Link to='./teacher-form'>
        <div className="profile-box">
            <FontAwesomeIcon icon={faUser} size="7x" />
            <p>Teacher</p>
          </div>
          </Link>
        
      </div>
      
    </div>
  );
}

export default Profile;
