import React, {useState} from "react";
import { createDoubt } from "../../../Controler/ApiCalls/Users";


function StudentDoubtForm() {
  const [doubtForm, setDoubtForm] = useState({
    classGrade: "",
    subject: "",
    topic: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoubtForm((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async(payload) => {
    try {
        // console.log(payload);
        const response = await createDoubt(payload)
        alert(response.data.message)
    } catch (error) {
        console.log(error)
    }

  };
  return (
    <form id="student-doubt-form" onSubmit={(e)=>{
        e.preventDefault()
        handleSubmit(doubtForm)
    }}>
      <label>Class Grade</label>
      <select
        type="text"
        name="classGrade"
        value={doubtForm.classGrade}
        onChange={handleInputChange}
        required
      >
        <option value="">Select Batch</option>
        <option value="Batch 1">Batch 1</option>
        <option value="Batch 2">Batch 2</option>
        <option value="Batch 3">Batch 3</option>
      </select>

      <label>Subject</label>
      <select
        type="text"
        name="subject"
        value={doubtForm.subject}
        onChange={handleInputChange}
        required
      >
        <option value="">Select Subject</option>
        <option value="DSA">DSA</option>
        <option value="Node.js">Node.js</option>
        <option value="React">React</option>
      </select>

      <label>Topic</label>
      <select type="text" name="topic" value={doubtForm.topic} onChange={handleInputChange} required>
        <option value="">Select topic</option>
        <option value="Linked-List">Linked-List</option>
        <option value="Trees">Trees</option>
        <option value="Recursion">Recursion</option>
        <option value="Stacks/queue">Stacks/queue</option>
        <option value="Hashmap">Hashmap</option>
        <option value="User Authorisation">User Authorisation</option>
        <option value="Setting up router">Setting up router</option>
        <option value="Virtual DOM">Virtual DOM</option>
        <option value="Hooks">Hooks</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentDoubtForm;
