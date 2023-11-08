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
//         const response = await fetch("https://online-assignment-server.vercel.app/api/v1/takenewassignments");
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
    <div className="max-w-[1200px] mx-auto">
      <h2 className="text-5xl mb-10 mt-20 text-blue-500 font-bold text-center">
        My All Assignments
      </h2>

      {!isLoading ? (
        <div className="flex justify-center mt-52">
          <span className="loading flex loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className=" grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-16 ">
          {data.map((showAll) => (
            <ShowMyAssignment showAll={showAll} key={showAll.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCompletedAssignment;
