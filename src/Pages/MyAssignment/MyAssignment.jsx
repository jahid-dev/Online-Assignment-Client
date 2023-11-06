import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../firebase/Provider/AuthProvider";
import ShowAssignments from "../Assignments/showAssignments";

const MyAssignment = () => {
  const [showMyAssignment, setShowMyAssignment] = useState([]);
  const { user } = useContext(AuthContext);

  // http://localhost:5000/api/v1/takenewassignments
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/takenewassignments")
      .then((res) => res.json())
      .then((data) => {
        const filterdMyAssignment = data.filter(
          (MyAssignment) =>
            MyAssignment?.submitUSerEmail == user?.email &&
            MyAssignment?.status == "complete"
        );
        setShowMyAssignment(filterdMyAssignment);
      });
  });
  return (
    <div>
      <h1>This is My Assignment</h1>
      {showMyAssignment.length}

      <div>
        {showMyAssignment?.map((showAssignments) => (
          <ShowAssignments
            showMyTask={showAssignments}
            key={showAssignments.id}
          ></ShowAssignments>
        ))}
      </div>
    </div>
  );
};

export default MyAssignment;
