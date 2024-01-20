import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Navbar from './View/Components/NavBar/Navbar';
import RegistrationForm from './View/Components/Forms/RegistrationForm';
import Home from './View/Components/Pages/Home';
import Navbar from './View/Components/NavBar/Navbar';
import LoginForm from './View/Components/Forms/LoginForm';
import Profile from './View/Components/Pages/Profile';
import TeacherRegistrationForm from './View/Components/Forms/TeacherRegistrationForm';

function App() {
  const isAuthenticated = false
  return (
    <Router>
      <Navbar isAuth = {isAuthenticated}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<RegistrationForm/>}/>
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/register/profile' element={<Profile/>}></Route>
        <Route path='/register/profile/teacher-form' element={<TeacherRegistrationForm/>}></Route>
      </Routes>
      
    </Router>
    
  );
}

export default App;
