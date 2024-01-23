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
import StudentDoubtForm from './View/Components/Forms/StudentDoubtForm';


function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false)
  const [user, setUser] = useState('')
  const handleClick = (user)=>{
    setisAuthenticated(true)
    console.log(user);
    setUser(user)
  }
  
  return (
    <Router>
      <Navbar isAuthenticated = {isAuthenticated} role = {user.role}/>
      <Routes>
        <Route path='/' element={<Home isAuthenticated = {isAuthenticated} user={user}/>}/>
        <Route path='/:studentId' element={<Home isAuthenticated = {isAuthenticated} user={user}/>}/>
        <Route path='/register' element={<RegistrationForm onRegister={handleClick}/>}/>
        <Route path='/login' element={<LoginForm onLogin={handleClick}/>}></Route>
        <Route path='/doubt' element={<StudentDoubtForm/>}></Route>
      </Routes>
      
    </Router>
    
  );
}

export default App;
