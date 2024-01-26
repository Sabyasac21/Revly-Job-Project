import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAllDoubts, getAllPendingDoubts, getAllSolvedDoubts } from "../../../Controler/ApiCalls/Users";
import './UserDoubt.css'
function UserDoubts() {
  const [doubts, setDoubts] = useState([]);
  const [history, setHistory] = useState([]);
  const [currentProblem, setCurrentProblem] = useState([])
  const location = useLocation();
  const { pathname } = location;
  const fetchData = async () => {
   
    if (pathname === "/doubts") {
      const response = await getAllDoubts();
    //   console.log(response.data);
      if (response.data.success) 
        {setDoubts(response.data.data);}
    }
    if (pathname === "/history") {
        const response = await getAllSolvedDoubts();
        if (response.data.success) {
          setHistory(response.data.data);
        }
      }

    if (pathname === "/live") {
        const response = await getAllPendingDoubts();
        if (response.data.success) {
          setCurrentProblem(response.data.data);
        }
      }
  };
  useEffect(()=>{
    fetchData()
    
  }, [pathname])
  return (
    <div className="userDoubts-container">
  {pathname === '/doubts' && (
    <div>
      <h2>All Doubts</h2>
      {doubts.length===0 ? (
        <p style={{display:'flex', justifyContent: 'center'}}>No doubts yet</p>
      ) : (
        <ul className="doubts-list">
          {doubts.map((doubt) => (
            
            <li key={doubt._id} >
              <strong>{doubt.topic}</strong>
              {doubt.resolved ? (
                <p>Solved on - {new Date().toLocaleString()}</p>
              ) : (
                <p>Raised on : {new Date(doubt.time).toLocaleString()}</p>
              )}
            </li>
            
          ))}
        </ul>
      )}
    </div>
  )}

{pathname === '/history' && (
    <div>
      <h2>All Solved Doubts</h2>
      {!history.length ? (
        <p style={{display:'flex', justifyContent: 'center'}}>No doubts solved yet</p>
      ) : (
        <ul className="doubts-list">
          {history.map((each) => (
            <li key={each._id}>
              <strong>{each.topic}</strong>
              {each.resolved ? (
                <p>Solved on - {new Date().toLocaleString()}</p>
              ) : (
                <p>Raised on : {new Date(each.time).toLocaleString()}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )}

{pathname === '/live' && (
    <div>
      <h2>Current Problems</h2>
      {!currentProblem.length ? (
        <p style={{display:'flex', justifyContent: 'center'}}>No doubts yet</p>
      ) : (
        <ul className="doubts-list">
          {currentProblem.map((doubt) => (
            <li key={doubt._id}>
              <strong>{doubt.topic}</strong>
              {doubt.resolved ? (
                <p>Solved on - {new Date().toLocaleString()}</p>
              ) : (
                <p>Raised on : {new Date(doubt.time).toLocaleString()}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )}
</div>

  );
}

export default UserDoubts;
