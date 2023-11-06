import { Link, useLoaderData } from "react-router-dom";

const ViewSingleAssignment = () => {
  const singleAssignment = useLoaderData();
  console.log(singleAssignment);
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
          <p className="text-xl font-semibold">
            Due Date: {dueDate}{" "}
          </p>
          <p className="text-xl font-semibold">
            Total marks:  {marks}{" "}
          </p>
          <p className="text-xl font-semibold">
          Difficulty Level:  {difficultyLevel}{" "}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-success hover:rounded-full">Take Assignment</button>
          </div>
        </div>
      </div>
      <div>
        <Link to='/assignments'>
        <button className="btn w-full mt-10 btn-accent">Go Back to Previous Page</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewSingleAssignment;
