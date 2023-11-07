const ShowMyAssignment = ({ showAll }) => {
  const { id, status, name, marks, feedback, givenMark, note } = showAll;

  // Title, feedback, obtain marks, total marks, assignment status
  return (
    <div key={id} className="h-60 card-compact w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Assignment Title: {name}</h2>
        <p className="text-xl font-semibold">Total Marks: {marks}</p>
        <p className="text-xl font-semibold">
          Obtain Marks: {status === "pending" ? "Pending" : givenMark}
        </p>
        <p className="text-xl font-semibold">Status: {status}</p>
        <p className="text-xl">
          Teacher Feedback: {status === "pending" ? "Pending" : feedback}
        </p>
      </div>
    </div>
  );
};

export default ShowMyAssignment;
