import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../firebase/Provider/AuthProvider";
import { faSpinner } from "@fortawesome/free-solid-svg-icons"; // Corrected the FontAwesome import
import ShowMyAssignment from "../../Pages/Assignments/ShowMyAssignment";
import { useLoaderData } from "react-router-dom";

const MyCompletedAssignment = () => {
  const { user } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/v1/takenewassignments");
//         if (response.ok) {
//           const data = await response.json();
//           const filterData = data.filter((singleData) => singleData.submitUserEmail == user?.email);
//           setShowMyAssignment(filterData);
//           setIsLoading(false);
//         } else {
//           // Handle the error, e.g., show an error message
//           console.error("Error fetching data");
//           setIsLoading(false);
//         }
//       } catch (error) {
//         console.error("An error occurred:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [ user?.email]);

const data = useLoaderData()


  return (
    <div>
      <h2 className="text-5xl mb-10 mt-20 text-blue-500 font-bold text-center">
        My All Assignments
      </h2>

      {!isLoading ? (
        <div className="flex justify-center mt-52">
          <span className="loading flex loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="max-w-[1200px] mx-auto grid gap-5 grid-cols-3">
          {data.map((showAll) => (
            <ShowMyAssignment showAll={showAll} key={showAll.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCompletedAssignment;
