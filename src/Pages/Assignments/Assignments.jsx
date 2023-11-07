
import { useEffect, useState } from "react";
import ShowAssignments from "./ShowAssignments";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const assignmentsPerPage = 3; // Number of assignments per page

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/allassignments")
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data);
      });
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setCurrentPage(1); // Reset to the first page when the filter changes
  };

  const filteredAssignments = assignments.filter((assignment) => {
    if (filter === "all") {
      return true;
    } else {
      return assignment.difficultyLevel === filter;
    }
  });

  // Calculate the index range for the current page
  const indexOfLastAssignment = currentPage * assignmentsPerPage;
  const indexOfFirstAssignment = indexOfLastAssignment - assignmentsPerPage;
  const currentAssignments = filteredAssignments.slice(
    indexOfFirstAssignment,
    indexOfLastAssignment
  );

  const totalPages = Math.ceil(filteredAssignments.length / assignmentsPerPage);

  const handlePageChange = (page) => {
    
    setCurrentPage(page);
    // window.addEventListener("scroll")
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div>
        <label htmlFor="filter">Filter by Difficulty:</label>
        <select
          id="filter"
          name="filter"
          className="border ml-5 text-center px-22 my-5"
          onChange={handleFilterChange}
          value={filter}
        >
          <option value="all">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {currentAssignments.map((assignment) => (
          <ShowAssignments
            assignments={assignment}
            key={assignment.id}
          ></ShowAssignments>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-2 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            } p-2 rounded`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
