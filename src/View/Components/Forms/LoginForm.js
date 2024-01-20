import React from 'react'
import { Link } from 'react-router-dom';
import './LoginForm.css'

function LoginForm() {
  return (
    <form id='login-form'>
        <label htmlFor='username'>Name</label>
        <input type='text' name='username' id='username' required></input>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' required></input>

        <button type='submit'>Login</button>
        <Link to='/register'>
            <span className='form register'>New to account? Register</span>
        </Link>
    </form>
  )
}

export default LoginForm