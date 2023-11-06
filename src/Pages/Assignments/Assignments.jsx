import { useEffect, useState } from "react";
import ShowAssignments from "./showAssignments";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/allassignments")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAssignments(data);
      });
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-3 gap-5">
        {assignments.map((assignments) => (
          <ShowAssignments
            assignments={assignments}
            key={assignments.id}
          ></ShowAssignments>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
