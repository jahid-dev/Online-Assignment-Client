import React, { useState } from 'react';
import Swal from "sweetalert2";

const GiveMarkForm = ({ pdfLink, marks, note, _id }) => {
  const [givenMark, setGivenMark] = useState(marks || '');
  const [feedback, setFeedback] = useState(note || '');

  const handleSubmit = () => {
    const completedAssignment = {
      givenMark,
      pdfLink,
      feedback,
      status: "complete",
    };

    fetch(`http://localhost:5000/api/v1/takenewassignments/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(completedAssignment),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Assignment Completed Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="feedback"
          ></textarea>
        </div>
        <div>
          <label htmlFor="givenMark">Mark:</label>
          <input
            id="givenMark"
            name="givenMark"
            className="border"
            type="text"
            value={givenMark}
            onChange={(e) => setGivenMark(e.target.value)}
            placeholder="give mark"
          />
        </div>
        <button className="btn-success" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default GiveMarkForm;
