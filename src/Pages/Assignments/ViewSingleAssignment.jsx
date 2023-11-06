import { Link, useLoaderData } from "react-router-dom";
import AssignmentSubmissionForm from "./AssignmentSubmissionForm";
import { useState } from "react";

const ViewSingleAssignment = () => {
  const singleAssignment = useLoaderData();
  const {
    assignmentTitle,
    marks,
    _id,
    dueDate,
    difficultyLevel,
    description,
    photo,
    assignmentAddedByUserEmail,
  } = singleAssignment;

  const [showSubmission, setShowSubmission] = useState(false);

  const handleSubmissionClick = () => {
    setShowSubmission(true);
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-20">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-80 h-80" src={photo} alt={assignmentTitle} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Title: {assignmentTitle}</h2>
          <p className="text-xl font-semibold">
            About Assignment: {description}{" "}
          </p>
          <p className="text-xl font-semibold">Due Date: {dueDate} </p>
          <p className="text-xl font-semibold">Total marks: {marks} </p>
          <p className="text-xl font-semibold">
            Difficulty Level: {difficultyLevel}{" "}
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={handleSubmissionClick}
            >
              <button
                className="btn btn-success hover:rounded-full"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Take Assignment
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
                          <AssignmentSubmissionForm
                            assignmentTitle={assignmentTitle}
                            marks={marks}
                            dueDate={dueDate}
                            assignmentId={_id}
                            userEmail={assignmentAddedByUserEmail}
                          />
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </dialog>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Link to="/assignments">
          <button className="btn w-full mt-10 btn-accent">
            Go Back to Previous Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewSingleAssignment;
