const ShowMyAssignment = ({ showAssignments }) => {
  const { status, name,marks,  feedback, givenMark, note } = showAssignments;

  //title, feedback, obtain marsk, total marks, assignment status
  return (
    <div>
      <div className="h-60 card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Assignment Title: {name} </h2>
          <p className="text-xl font-semibold ">Total Marks: {marks}</p>
          <p className="text-xl font-semibold ">
          Obtain Marks: {status === "pending" ? "Pending" : givenMark}
          
           </p>
          <p className="text-xl font-semibold ">Status: {status}</p>
          <p className="text-xl ">Teacher Feedback: {status === "pending" ? "Pending" : feedback}</p>
          
          
        </div>
      </div>
    </div>
  );
};

export default ShowMyAssignment;
