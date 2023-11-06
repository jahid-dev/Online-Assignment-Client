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
        <table className="table">
          <tbody>
            <tr className="bg-base-200 text-center">
              <td>{name}</td>
              <td>{marks}</td>
              <td>{date}</td>
              <td>{status}</td>

              <button
              onClick={handleSubmissionClick}
            >
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                <td><button className="btn btn-primary">Give Mark</button></td>
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <div className="modal-action">
                    <form method="dialog">
                      {showSubmission && (
                        <div>
                          <GiveMarkForm
                            pdfLink={pdfLink}
                            _id={_id}
                            marks={marks}
                            note={note}
                            
                          />
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </dialog>
            </button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowSubmittedAssignment;
