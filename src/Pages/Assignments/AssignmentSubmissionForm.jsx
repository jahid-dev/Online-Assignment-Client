import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AssignmentSubmissionForm = ({ assignmentId, userEmail }) => {
  const [pdfLink, setPdfLink] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    
    const submittedAssignment = {
      assignmentId: assignmentId,
      userEmail: userEmail,
      pdfLink: pdfLink,
      note: note,
      status: 'pending' 
    };
    console.log(submittedAssignment);
    fetch(' http://localhost:5000/api/v1/takenewassignments', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(submittedAssignment)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Assignment Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
           
        })
    
  };

  return (
    <div className="submission-form">
      <h2>Assignment Submission</h2>
      <div>
        <label htmlFor="pdfLink">PDF Link:</label>
        <input
          type="text"
          id="pdfLink"
          value={pdfLink}
          onChange={(e) => setPdfLink(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="note">Note:</label>
        <textarea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AssignmentSubmissionForm;
