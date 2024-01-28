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
        await RegisterUser(payload);
        const response = await LoginUser(payload)
        alert('User registered');

        if (response.data.success) {
          response.data.user.role === "student"
          ? navigate(`/studentDashBoard/${response.data.user._id}`)
          : navigate(`/teacherDashBoard/${response.data.user._id}`);
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
          <label>Class Grade</label>
          <select
            type="text"
            name="classGrade"
            value={formData.classGrade}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Batch</option>
            <option value="Batch 1">Batch 1</option>
            <option value="Batch 2">Batch 2</option>
            <option value="Batch 3">Batch 3</option>
          </select>

          <label>Subject</label>
          <select
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Subject</option>
            <option value="DSA">DSA</option>
            <option value="Node.js">Node.js</option>
            <option value="React">React</option>
          </select>

          <label>Language</label>
          <select
            type="text"
            name="language"
            value={formData.language}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Japnese">Japnese</option>
          </select>
        </>
      )}

      <button type="submit" onClick={() => props.onRegister(formData)}>
        Register
      </button>

      <Link to="/login">
        <span className="form login">Already have an account</span>
      </Link>
    </form>
  );
}

export default RegistrationForm;
