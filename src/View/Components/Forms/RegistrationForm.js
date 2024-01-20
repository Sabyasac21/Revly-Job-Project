import React, {useState} from 'react'
import './RegistrationForm.css'
import {axiosInstance} from '../../Index';
import { Link, useNavigate } from 'react-router-dom';
// import { RegisterUser } from '../../../Controler/ApiCalls/Users';

function RegistrationForm() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username:'',
    email: '',
    password: ''
  })

  const [validationErrors, setValidationErrors] = useState({
    username: '',
    email: '',
    password: ''
  })
  const validateForm = () => {
    
    const errors = {
      username: formData.username.trim() === '' ? 'Username is required' : '',
      email: !/^\S+@\S+\.\S+$/.test(formData.email) ? 'Invalid email address' : '',
      password: formData.password.length < 6 ? 'Password must be at least 6 characters' : '',
    }

    setValidationErrors(errors);

    
    return Object.values(errors).every((error) => error === '');
  };

  const handleSubmit = async (data) => {
   
    try {
      if (validateForm()){
      // console.log(data, 'tis is data');
      const response = await axiosInstance.post('/register', data);
  
      // console.log(response);
      
      alert(response.data.message);
      if (response.data.success){
        navigate('/register/profile')
      }
    }
    } catch (error) {
      console.error('Error submitting form:', error);
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
    <form id='registration-form' onSubmit={(e)=>{
      e.preventDefault();
      handleSubmit(formData)
    }}>
        <label htmlFor="username">Username:</label>
        <input type='text' name='username' id='username' value={formData.username} onChange={handleInputChange} required={true}></input>
        {validationErrors.username && <p className='error'>{validationErrors.username}</p>}
        
        <label htmlFor="email">E-mail:</label>
        <input type='email' name='email' id='email' value={formData.email} onChange={handleInputChange} required></input>
        {validationErrors.email && <p className='error'>{validationErrors.email}</p>}
        
        <label htmlFor="password">Password:</label>
        <input type='password' name='password' id='password' value={formData.password} onChange={handleInputChange} required></input>
        {validationErrors.password && <p className='error'>{validationErrors.password}</p>}
        <button type='submit'>Register</button>
       
        
        <Link to='/login'>
        <span className='form login'>Already have an account</span>
        </Link>
        </form>
    
  )
}

export default RegistrationForm