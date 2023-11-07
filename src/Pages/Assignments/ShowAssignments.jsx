import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../firebase/Provider/AuthProvider";
import Swal from "sweetalert2";

const ShowAssignments = ({ assignments }) => {
  const { user } = useContext(AuthContext);
  const [isDelete, setIsDelete] = useState(true);

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

  const checkUser = () => {
    if (assignmentAddedByUserEmail != user?.email || user == null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          "You cannot delete this assignment. Only the assignment creator can delete it.",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      return true; 
    }
    return false; 
  };

  const handleDelete = () => {
    if (checkUser()) {
      return; // Exit early if user check fails
    } else {
      fetch(`http://localhost:5000/api/v1/allassignments/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsDelete(false)
          if (data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your assignment has been deleted.", "success");
          }
        })
        .catch((error) => {
          console.error("Error deleting assignment:", error);
        });
    }
  };

  return (
    <div>
      {!isDelete ? null : (
        <div className="flex justify-center">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="w-80 h-80" src={photo} alt="photos" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{assignmentTitle}</h2>
            <p>{description}</p>
            <div className="text-xl">
              <p>Difficulty Level: {difficultyLevel}</p>
              <p>Total Marks: {marks}</p>
              <p>Due Date: {dueDate}</p>
              <p className="font-bold text-xs">
                Assignment by: {assignmentAddedByUserEmail}
              </p>
            </div>
            <div className="card-actions justify-end">
              <Link to={`/viewassignment/${_id}`}>
                <button className="btn btn-warning">View Assignment</button>
              </Link>
              <Link to={`/updateassignment/${_id}`}>
                <button className="btn btn-success">Update Assignment</button>
              </Link>
              <button
                onClick={handleDelete}
                className="btn bg-red-500 hover:bg-red-600 text-white p-3"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default ShowAssignments;
