import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { LoginUser } from "../../../Controler/ApiCalls/Users";

function LoginForm(props) {
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (payload) => {
    try {
      const response = await LoginUser(payload);

      alert(response.data.message);
      if (response.data.success) {
        localStorage.setItem("token", response.data.data);

        props.onLogin(response.data.user);
        console.log(props.user);

        response.data.user.role === "student"
          ? navigate(`/studentDashBoard/${response.data.user._id}`)
          : navigate(`/teacherDashBoard/${response.data.user._id}`);
      }
    } catch (error) {
      alert("User not found, please register");
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <form
      id="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        // console.log(formData);
        handleSubmit(formData);
      }}
    >
      <label htmlFor="username">E-mail</label>
      <input
        type="text"
        name="email"
        id="email"
        onChange={handleInputChange}
        required
      ></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleInputChange}
        required
      ></input>

      <button type="submit">Login</button>
      <Link to="/register">
        <span className="form register">New to account? Register</span>
      </Link>
    </form>
  );
}

export default LoginForm;
