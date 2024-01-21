import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Navbar from './View/Components/NavBar/Navbar';
import RegistrationForm from './View/Components/Forms/RegistrationForm';
import Home from './View/Components/Pages/Home';
import Navbar from './View/Components/NavBar/Navbar';
import LoginForm from './View/Components/Forms/LoginForm';
// import Profile from './View/Components/Pages/Profile';
// import TeacherRegistrationForm from './View/Components/Forms/TeacherRegistrationForm';
import { useState } from 'react';


function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false)
  const [role, setRole] = useState('')
  const handleLogin = (role)=>{
    setisAuthenticated(true)
    setRole(role)
  }
  return (
    <Router>
      <Navbar isAuthenticated = {isAuthenticated}/>
      <Routes>
        <Route path='/' element={<Home isAuthenticated = {isAuthenticated} role={role}/>}/>
        <Route path='/register' element={<RegistrationForm onLogin={handleLogin}/>}/>
        <Route path='/login' element={<LoginForm/>}></Route>
      </Routes>
      
    </Router>
    
  );
}

export default App;
