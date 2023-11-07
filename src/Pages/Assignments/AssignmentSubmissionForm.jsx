import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../firebase/Provider/AuthProvider";

const AssignmentSubmissionForm = ({
  assignmentId,
  userEmail,
  assignmentTitle,
  marks,
  dueDate,
}) => {
  const [pdfLink, setPdfLink] = useState("");
  const [note, setNote] = useState("");

  const {user} = useContext(AuthContext)
  const submitUSerEmail = user?.email
  const handleSubmit = () => {
    const submittedAssignment = {
      name: assignmentTitle,
      assignmentId, // This should be assignmentId, not name
      marks,
     
      submitUSerEmail,
      pdfLink,
      note,
      date: dueDate,
      status: "pending",
    };

    console.log(submittedAssignment);
    fetch("http://localhost:5000/api/v1/takenewassignments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
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
  };

  return (
    <div className="submission-form">
      <h2>Assignment Submission</h2>
      <div>
        <label htmlFor="pdfLink">PDF Link:</label>
        <input
        className="border input input-bordered input-primary w-full max-w-xs"
          type="url"
          id="pdfLink"
          value={pdfLink}
          placeholder="pdf link"
          required
          onChange={(e) => setPdfLink(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="note">Note:</label>
        <textarea
          id="note"
          className="border input input-bordered input-primary w-full max-w-xs"
          value={note}
          required
          placeholder="note"
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
      </div>
      <button className="btn-success" onClick={handleSubmit}>Submit</button>
      
    </div>
  );
};

export default AssignmentSubmissionForm;


