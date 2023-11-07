import React, { useState } from "react";
import Swal from "sweetalert2";

const GiveMarkForm = ({ pdfLink, marks, note, _id }) => {
  const [givenMark, setGivenMark] = useState(marks || "");
  const [feedback, setFeedback] = useState(note || "");
  const [pdfLinkError, setPdfLinkError] = useState("");
  const [feedbackError, setFeedbackError] = useState("");
  const [givenMarkError, setGivenMarkError] = useState("");

  const validateForm = () => {
    let isValid = true;

    // PDF Link Validation
    if (!isURL(pdfLink)) {
      setPdfLinkError("Invalid URL");
      isValid = false;
    } else {
      setPdfLinkError("");
    }

    // Feedback Validation
    if (feedback.trim() === "") {
      setFeedbackError("Feedback is required");
      isValid = false;
    } else {
      setFeedbackError("");
    }

    // Given Mark Validation
    const mark = parseFloat(givenMark);
    if (isNaN(mark) || mark < 0 || mark > 100) {
      setGivenMarkError(
        "Invalid mark. Please enter a number between 0 and 100."
      );
      isValid = false;
    } else {
      setGivenMarkError("");
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    // Rest of your submission logic here
    // ...

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
        console.error("Error:", error);
      });
  };

  const isURL = (str) => {
    // Basic URL validation function
    const pattern = /^https?:\/\/.+/;
    return pattern.test(str);
  };
  // <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
  return (
    <div className="">
      <div className="submission-form  ">
        <h2>Assignment Submission</h2>
        <div className=""> 
          <label htmlFor="pdfLink">PDF Link:</label>
          {/* <input
            className={`border ${pdfLinkError ? 'error' : ''}`}
            type="url"
            id="pdfLink"
            defaultValue={pdfLink}
            required
          /> */}
          <input
            type="url"
            id="pdfLink"
            defaultValue={pdfLink}
            required
            placeholder="PDF Link"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          {pdfLinkError && <p className="error-text">{pdfLinkError}</p>}
        </div>
        <div>
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            className={`border input input-bordered input-primary w-full max-w-xs ${feedbackError ? "error" : ""}`}
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="feedback"
          ></textarea>
          {feedbackError && <p className="error-text">{feedbackError}</p>}
        </div>
        <div>
          <label htmlFor="givenMark">Mark:</label>
          <input
            id="givenMark"
            name="givenMark"
            className={` input input-bordered input-primary w-full max-w-xs ${givenMarkError ? "error" : ""}`}
            type="text"
            value={givenMark}
            onChange={(e) => setGivenMark(e.target.value)}
            placeholder="give mark"
          />
          {givenMarkError && <p className="error-text">{givenMarkError}</p>}
        </div>
        <button className="btn-success btn mt-5" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default GiveMarkForm;
