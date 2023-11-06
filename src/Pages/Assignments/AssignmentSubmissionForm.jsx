import React, { useState } from 'react';

const AssignmentSubmissionForm = ({ assignmentId, userEmail }) => {
  const [pdfLink, setPdfLink] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    // Here, you can handle the submission logic, such as sending the data to a server or updating a database
    const submittedAssignment = {
      assignmentId: assignmentId,
      userEmail: userEmail,
      pdfLink: pdfLink,
      note: note,
      status: 'pending' 
    };
    // Perform actions to submit the assignment (e.g., API calls, state updates)

    // Example: You might have an API call to submit the assignment data
    // api.submitAssignment(submittedAssignment)
    //   .then(response => {
    //     // Handle success or errors
    //   })
    //   .catch(error => {
    //     // Handle errors
    //   });
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
