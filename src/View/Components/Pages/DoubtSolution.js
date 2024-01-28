import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDoubtDetails, updateDoubt } from "../../../Controler/ApiCalls/Users";
import './DoubtSolution.css';
import './modalContent.css';




function DoubtSolution() {
  const [doubt, setDoubt] = useState("");
  const doubtId = useParams();
  const [isModalOpen, setIsModalOpen ]= useState(false)
  const navigate = useNavigate()
   
  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
        const response = await updateDoubt(doubtId.doubtId);
        
    
        if (response.data.success) {
          console.log("Doubt updated successfully");
          
          closeModal();
        } else {
          console.error("Failed to update doubt");
        }
      } catch (error) {
        console.error("Error updating doubt:", error);
      }
    };
  

  const closeModal = () => {
    setIsModalOpen(false);
    
  };


  const fetchData = async () => {
    const response = await getDoubtDetails(doubtId.doubtId);
    
    if (response.data.success) {
        console.log('Success');
      setDoubt(response.data.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, [doubtId, isModalOpen]);
  return (
    <div className="doubt-container">
        <div className="doubt-item">
          <p>
            <strong>Subject:</strong> {doubt.subject}
          </p>
          <p>
            <strong>Topic:</strong> {doubt.topic}
          </p>
          <div className="language-box">
            <p>
              <strong>Language:</strong> {doubt.language}
            </p>
          </div>

          <div className="resolve-status-box">
            <p>
              <strong>Resolved:</strong> {doubt.resolved? 'True': 'False'}
            </p>
          </div>
          <div>
            <div className="solution-cont" onClick={openModal}>Add Solution</div>
          </div>
          <button>Close</button>
        </div>

        {isModalOpen && (
  <div className="modal-backdrop" >
    <div className="modal-content">
    
      <h2>Add File</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fileUpload">Upload PDF File:</label>
          <input type="file" id="fileUpload" accept=".pdf" />
        </div>
        <div className="form-group">
          <label htmlFor="solutionText">Solution Text:</label>
          <textarea id="solutionText" rows="4" cols="50"></textarea>
        </div>
        <button type="submit" >Submit</button>
      </form>
    </div>
  </div>
)}

      
    </div>
  );
}

export default DoubtSolution;
