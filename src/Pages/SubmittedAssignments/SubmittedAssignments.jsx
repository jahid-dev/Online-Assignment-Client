import { useContext, useState, useEffect } from "react";
import ShowSubmittedAssignment from "../Assignments/ShowSubmittedAssignment";
import { AuthContext } from "../../firebase/Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const SubmittedAssignments = () => {
  const [submitAssignment, setSubmitAssignment] = useState([]);
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true); 
  const [isComplete, setIsComplete] = useState(false);
  const data = useLoaderData();
  useEffect(() => {

    const fetchData = async () => {
      try {

        const filteredData = data.filter(
          (showSubmit) =>
            showSubmit?.submitUserEmail === user?.email &&
            showSubmit.status === "pending"
        );
        setSubmitAssignment(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); 
        setIsComplete(true);
      }
    };

    fetchData();
  }, [user]);

  return (
    <div className="max-w-[1200px] mt-20 mx-auto">
      {isLoading ? (
        <div className="flex justify-center mt-52">
          <span className="loading flex loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {submitAssignment?.map((submit) => (
            <ShowSubmittedAssignment key={submit.id} submit={submit} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SubmittedAssignments;
