import { useContext, useState, useEffect } from "react";
import ShowSubmittedAssignment from "../Assignments/ShowSubmittedAssignment";
import { AuthContext } from "../../firebase/Provider/AuthProvider";
import io from "socket.io-client"; // Import the WebSocket library

const SubmittedAssignments = () => {
  const [submitAssignment, setSubmitAssignment] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const socket = io("https://online-assignment-server.vercel.app/"); // Connect to your WebSocket server

    // Listen for updates from the server
    socket.on("newSubmission", (newSubmission) => {
      if (newSubmission.submitUserEmail == user.email) {
        // Update the state with the new submission
        setSubmitAssignment((prevSubmitAssignment) => [...prevSubmitAssignment, newSubmission]);
      }
    });

    // Fetch initial data
    fetch("https://online-assignment-server.vercel.app/api/v1/takenewassignments")
      .then((res) => res.json())
      .then((data) => {
        const filterByUser = data.filter(
          (showSubmit) => showSubmit.submitUserEmail == user.email && showSubmit.status == "pending" 
        );
        setSubmitAssignment(filterByUser);
      });

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, [user,submitAssignment]);

  return (
    <div className="max-w-[1200px] mt-20 mx-auto">
      <table className="table">
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
        {submitAssignment.map((submit) => (
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
