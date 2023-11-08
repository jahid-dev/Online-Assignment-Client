import React, { useState } from "react";
import GiveMarkForm from "./GiveMarkForm";

const ShowSubmittedAssignment = ({ submit }) => {
  const { name, _id, assignmentId, date, status, marks, userEmail, note, pdfLink } = submit;

  const [showSubmission, setShowSubmission] = useState(false);

  const handleSubmissionClick = () => {
    setShowSubmission(true);
  }

  return (
    <div>
      <div className="overflow-x-auto">
     
         
            <div>
              <p className="p-2 text-center">Assignment Name: {name}</p>
              <p className="p-2 text-center">Total Marks: {marks}</p>
              <p className="p-2 text-center">Submission Date: {date}</p>
              <p className="p-2 text-center">Assignment Status: {status}</p>
              <p className="p-2 text-center">
                <button
                  onClick={handleSubmissionClick}
                  className="btn btn-primary"
                >
                  Give Mark
                </button>
              </p>
            </div>
          
        
      </div>
      {showSubmission && (
        <dialog open={showSubmission} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div className="modal-action">
              <form method="dialog">
                <GiveMarkForm
                  pdfLink={pdfLink}
                  _id={_id}
                  marks={marks}
                  note={note}
                />
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ShowSubmittedAssignment;
