import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Navbar from './View/Components/NavBar/Navbar';
import RegistrationForm from "./View/Components/Forms/RegistrationForm";
import Home from "./View/Components/Pages/Home";
import Navbar from "./View/Components/NavBar/Navbar";
import LoginForm from "./View/Components/Forms/LoginForm";
// import Profile from './View/Components/Pages/Profile';
// import TeacherRegistrationForm from './View/Components/Forms/TeacherRegistrationForm';
import { useState } from "react";
import StudentDoubtForm from "./View/Components/Forms/StudentDoubtForm";
import UserDoubts from "./View/Components/Pages/UserDoubts";
import TeacherDoubts from "./View/Components/Pages/TeacherDoubts"

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  const handleClick = (user) => {
    setisAuthenticated(true);
    setUser(user);
    console.log(user);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} role={user.role} />
      <Routes>
        <Route
          path="/"
          element={<Home isAuthenticated={isAuthenticated} user={user} />}
        />
        <Route
          path="/studentDashBoard/:studentId"
          element={<Home isAuthenticated={isAuthenticated} user={user} />}
        />
        <Route
          path="/teacherDashBoard/:teacherId"
          element={<Home isAuthenticated={isAuthenticated} user={user} />}
        />
        <Route
          path="/register"
          element={<RegistrationForm onRegister={handleClick} />}
        />
        <Route
          path="/login"
          element={<LoginForm onLogin={handleClick} />}
        ></Route>
        <Route path="/doubt" element={<StudentDoubtForm />}></Route>
        
        <Route path="/doubts" element={<UserDoubts />}></Route>
        <Route path="/history" element={<UserDoubts />}></Route>
        <Route path="/live" element={<UserDoubts />}></Route>
        <Route path="/teacher/doubts" element={<TeacherDoubts />}></Route>
        <Route path="/teacher/history" element={<TeacherDoubts />}></Route>
        <Route path="/teacher/live" element={<TeacherDoubts />}></Route>
      
      </Routes>
    </Router>
  );
}

export default App;
