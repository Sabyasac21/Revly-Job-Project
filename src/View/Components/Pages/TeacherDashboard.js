import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // Import your CSS file for styling

const TeacherDashboard = () => {
  const [problemsHistory, setProblemsHistory] = useState([]);

  useEffect(() => {
    // Simulate fetching problems history data (replace with your API call)
    const fetchData = async () => {
      try {
        // Fetch problems history data from your API
        // const response = await fetch('/api/teacher/history');
        // const data = await response.json();

        // Simulated data
        const data = [
          { id: 1, problem: 'Problem 1', solvedDate: '2022-04-01' },
          { id: 2, problem: 'Problem 2', solvedDate: '2022-04-02' },
          // Add more data as needed
        ];

        setProblemsHistory(data);
      } catch (error) {
        console.error('Error fetching problems history:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="teacher-dashboard">
      <h2>Teacher Dashboard</h2>
      {problemsHistory.length === 0 ? (
        <p>No problems solved yet.</p>
      ) : (
        <ul className="problems-list">
          {problemsHistory.map((problem) => (
            <li key={problem.id}>
              <strong>{problem.problem}</strong> - Solved on {problem.solvedDate}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeacherDashboard;
