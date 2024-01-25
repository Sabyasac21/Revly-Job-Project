import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // Import your CSS file for styling
import { useParams } from 'react-router-dom';
import { getBatchDoubts } from '../../../Controler/ApiCalls/Users';


const TeacherDashboard = () => {
  const [studentDoubt, setstudentDoubt] = useState([]);
  const userId = useParams()
  const teacherId = userId.studentId
  useEffect(() => {
  
    const fetchData = async () => {
      try {
        // console.log(userId);
        const response = await getBatchDoubts(userId.teacherId)
        if (response.data.success){
          setstudentDoubt(response.data.data);
        }
        
      } catch (error) {
        console.error('Error fetching problems history:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="teacher-dashboard">
      <h2>Teacher Dashboard</h2>
      {studentDoubt.length === 0 ? (
        <p>No problems solved yet.</p>
      ) : (
        <ul className="problems-list">
          {studentDoubt.map((problem) => (
            <li key={problem._id}>
              <strong>{problem.topic}</strong> - Solved on {new Date(problem.time).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeacherDashboard;
