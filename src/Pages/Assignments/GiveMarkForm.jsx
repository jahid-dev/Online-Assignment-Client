import React, { useState } from 'react';

const GiveMarkForm = ({ pdfLink, marks, note }) => {

  const [givenMark, setGivenMark] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {

    const submittedAssignment = {
      givenMark,
      pdfLink,
      feedback,
      status: "complete",
    };

    console.log(submittedAssignment);

    
    /*
    fetch("http://localhost:5000/api/v1/takenewassignments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submittedAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Assignment Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
    */
  };

  return (
    <div>
      <div className="submission-form">
        <h2>Assignment Submission</h2>
        <div>
          <label htmlFor="pdfLink">PDF Link:</label>
          <input
            className="border"
            type="url"
            id="pdfLink"
            defaultValue={pdfLink}
            required
          />
        </div>
        <div>
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            className="border"
            name="feedback"
            value={feedback} // Use value to bind to the state
            onChange={(e) => setFeedback(e.target.value)} // Update the feedback state
            placeholder="feedback"
          ></textarea>
        </div>
        <div>
          <label htmlFor="givenMark">Mark:</label>
          <textarea
            id="givenMark"
            name="givenMark"
            className="border"
            value={givenMark} // Use value to bind to the state
            onChange={(e) => setGivenMark(e.target.value)} // Update the givenMark state
            placeholder="give mark"
          ></textarea>
        </div>
        <button className="btn-success" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default GiveMarkForm;
