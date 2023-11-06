import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../firebase/Provider/AuthProvider";
import ShowMyAssignment from "../Assignments/ShowMyAssignment";

const MyAssignment = () => {
  const [showMyAssignment, setShowMyAssignment] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/takenewassignments")
      .then((res) => res.json())
      .then((data) => {
        const filteredMyAssignment = data.filter(
          (assignment) => assignment?.submitUserEmail === user?.email
        );
        setShowMyAssignment(filteredMyAssignment);
      });
  }, []); // Empty dependency array

  return (
    <div>
      <h2 className="text-5xl mb-10 mt-20 text-blue-500 font-bold text-center">
        My All Assignments
      </h2>

      <div className="max-w-[1200px] mx-auto grid gap-5 grid-cols-3">
        {showMyAssignment.map((showAssignments) => (
          <ShowMyAssignment
            key={showAssignments.id}
            showAssignments={showAssignments}
          />
        ))}
      </div>
    </div>
  );
};

export default MyAssignment;
