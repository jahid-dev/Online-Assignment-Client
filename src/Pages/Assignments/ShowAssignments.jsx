import { Link } from "react-router-dom";

const ShowAssignments = ({ assignments }) => {
  const {
    assignmentTitle,
    marks,
    _id,
    dueDate,
    difficultyLevel,
    description,
    photo,
    assignmentAddedByUserEmail,
  } = assignments;
  return (
    <div className="flex justify-center">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-80 h-80"
            src={photo}
            alt="photos"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{assignmentTitle}</h2>
          <p>{description}</p>
          <div className="text-xl">
          <p>Difficulty Level: {difficultyLevel}</p>
          <p>Total Marks: {marks}</p>
          <p>Due Date: {dueDate}</p>
          <p className="font-bold text-xs">Assignment by: {assignmentAddedByUserEmail}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/viewassignment/${_id}`}>
            <button className="btn btn-warning">View Assignment</button>
            </Link>
            <Link to={`/updateassignment/${_id}`}>
            <button className="btn btn-success">Update Assignment</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAssignments;
