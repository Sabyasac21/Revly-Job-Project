import React, { useEffect, useState } from 'react'
import { userDoubt } from '../../../Controler/ApiCalls/Users'
import { useParams } from 'react-router-dom';
import './Dashboard.css'

function StudentDashboard() {
  const userId = useParams()
  const [doubts, setDoubts] = useState([])
  const getDoubts = async()=>{
    try {
      const response = await userDoubt({userId : userId});
      setDoubts(response.data.data)
      console.log('success');
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(()=>{
    getDoubts()
  }, [])
  return (
    <div className="doubt-list">
    {doubts.map((doubt) => (
      <div key={doubt._id} className="doubt-item">
        <p>Topic: {doubt.topic}</p>
        <p>Assigned: {doubt.assigned ? 'Assigned' : 'Not assigned'}</p>
        <p>Time: {new Date(doubt.time).toLocaleString()}</p>
        
      </div>
    ))}
  </div>
);
    }


export default StudentDashboard