import { useEffect, useState } from "react";
import ShowSubmittedAssignment from "../Assignments/ShowSubmittedAssignment";

const SubmittedAssignments = () => {
  const [submitAssignment, setSubmitAssignment] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/takenewassignments")
      .then((res) => res.json())
      .then((data) => {
        setSubmitAssignment(data);
      });
  }, []);

  return (
    <div className="max-w-[1200px]  mt-20 mx-auto">
      <table className="table ">
        <thead>
          <tr className="text-center">
            
            <th>Assignment Title</th>
            <th>Mark</th>
            <th>Due date</th>
            <th>Status</th>
            <th>Give Mark</th>
          </tr>
        </thead>
        
      </table>

      <div className="table overflow-x-auto">
        {submitAssignment?.map((submit) => (
          <ShowSubmittedAssignment
            key={submit.id}
            submit={submit}
          ></ShowSubmittedAssignment>
        ))}
      </div>
    </div>
  );
};

export default SubmittedAssignments;
