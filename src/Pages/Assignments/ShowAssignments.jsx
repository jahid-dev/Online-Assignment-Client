const ShowAssignments = ({ assignments }) => {
  const {
    assignmentTitle,
    marks,
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
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAssignments;
