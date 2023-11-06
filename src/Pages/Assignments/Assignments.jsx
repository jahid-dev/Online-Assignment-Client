import { useEffect, useState } from "react";
import ShowAssignments from "./ShowAssignments";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/allassignments")
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data);
      });
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredAssignments = assignments.filter((assignment) => {
    if (filter === "all") {
      return true; 
    } else {
      return assignment.difficultyLevel === filter;
    }
  });

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
      <div className="grid grid-cols-3 gap-5">
        {filteredAssignments.map((assignment) => (
          <ShowAssignments
            assignments={assignment}
            key={assignment.id}
          ></ShowAssignments>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
