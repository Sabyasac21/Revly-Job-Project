import React, { useState } from "react";
import "./TeacherRegistrationForm.css";
import { useNavigate } from "react-router-dom";
// import UserSubject from "../../../Model/UserSubject/UserSubject";
import { axiosInstance } from "../../Index";

function TeacherRegistrationForm() {
  const [formData, setFormData] = useState({
    subject: "",
    batch: "",
    language: "",
  });
  const Navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await axiosInstance.post(
        "/register/profile/teacher-form",
        data
      );
      Navigate("/", { state: { isAuth: true } });
      return response;
    } catch (error) {
      return error
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
    <div className="card-form">
      <h1>Fill in the Details</h1>

      <form
        id="teacher-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formData);
        }}
      >
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          onChange={handleInputChange}
          name="subject"
          id="subject"
          required
        ></input>
        <label htmlFor="batch">Batch</label>
        <input
          type="text"
          onChange={handleInputChange}
          name="batch"
          id="batch"
          required
        ></input>
        <label htmlFor="language">Language</label>
        <input
          type="text"
          onChange={handleInputChange}
          name="language"
          id="language"
          required
        ></input>

        <button type="submit">Start</button>
      </form>
    </div>
  );
}

export default TeacherRegistrationForm;
