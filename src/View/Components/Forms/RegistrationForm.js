import React, { useState } from "react";
import "./RegistrationForm.css";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser, LoginUser } from "../../../Controler/ApiCalls/Users";
// import { RegisterUser } from '../../../Controler/ApiCalls/Users';

function RegistrationForm(props) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
  email: "",
  password: "",
  role: "student",
  classGrade: "",
  language: "",
  subject: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    const errors = {
      username: formData.username.trim() === "" ? "Username is required" : "",
      email: !/^\S+@\S+\.\S+$/.test(formData.email)
        ? "Invalid email address"
        : "",
      password:
        formData.password.length < 6
          ? "Password must be at least 6 characters"
          : "",
    };

    setValidationErrors(errors);

    return Object.values(errors).every((error) => error === "");
  };

  const handleSubmit = async (payload) => {
    try {
      if (validateForm()) {
        
        const response = await RegisterUser(payload);
        
        alert(response.data.message);
        if (response.data.success) {
          localStorage.setItem('token', response.data.data)
          
          navigate('/')
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form
      id="registration-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formData);
      }}
    >
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        id="username"
        value={formData.username}
        onChange={handleInputChange}
        required={true}
      ></input>
      {validationErrors.username && (
        <p className="error">{validationErrors.username}</p>
      )}

      <label htmlFor="email">E-mail:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      ></input>
      {validationErrors.email && (
        <p className="error">{validationErrors.email}</p>
      )}

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleInputChange}
        required
      ></input>
      {validationErrors.password && (
        <p className="error">{validationErrors.password}</p>
      )}

      <label htmlFor="role">Role:</label>
      <select
        type="text"
        name="role"
        id="role"
        value={formData.role}
        onChange={handleInputChange}
        required
      >
        <option value="student">Student</option>
        <option value="teacher">Tutor</option>
      </select>
      {formData.role === "teacher" && (
        <>
          <label htmlFor="Class">Class-Grade:</label>
          <input
            type="text"
            name="classGrade"
            id="classGrade"
            value={formData.classGrade}
            onChange={handleInputChange}
            
            
          ></input>

          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleInputChange}
            
            
          ></input>

          <label htmlFor="language">Language:</label>
          <input
            type="text"
            name="language"
            id="language"
            value={formData.language}
            onChange={handleInputChange}
            
            
          ></input>
        </>
      )}

      <button type="submit" onClick={()=>props.onLogin(formData.role)}>Register</button>

      <Link to="/login">
        <span className="form login">Already have an account</span>
      </Link>
    </form>
  );
}

export default RegistrationForm;
