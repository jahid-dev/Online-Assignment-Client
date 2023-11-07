const ShowMyAssignment = ({ showAll }) => {
  const { id, status, name, marks, feedback, givenMark, note } = showAll;

  // Title, feedback, obtain marks, total marks, assignment status
  return (
    <div className="flex justify-center">
      <div  className="lg:h-60 w-96 md:h-full border border-blue-900 card-compact md:w-80  lg:w-96 bg-base-100 shadow-2xl">
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
    </div>
  );
};

export default ShowMyAssignment;
