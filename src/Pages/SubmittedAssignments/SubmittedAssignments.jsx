import { useContext,  useState } from "react";
import ShowSubmittedAssignment from "../Assignments/ShowSubmittedAssignment";
import { AuthContext } from "../../firebase/Provider/AuthProvider";

const SubmittedAssignments = () => {
  const [submitAssignment, setSubmitAssignment] = useState([]);
  const { user } = useContext(AuthContext);
  //   console.log(user.email);
//   const recentEmail = user?.email;


 
    fetch("http://localhost:5000/api/v1/takenewassignments")
      .then((res) => res.json())
      .then((data) => {
        const filterByUser = data.filter(
          (showSubmit) => showSubmit?.submitUSerEmail == user?.email
        );
        setSubmitAssignment(filterByUser);
      });
 

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
