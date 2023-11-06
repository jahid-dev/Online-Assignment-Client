import React from "react";

const ShowSubmittedAssignment = ({ submit }) => {
  const { name, assignmentId, date, status, marks, userEmail, note, pdfLink } = submit;
  
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr className="bg-base-200 text-center">
              <td>{name}</td>
              <td>{marks}</td>
              <td>{date}</td>
              <td>{status}</td>
              <td><button className="btn btn-primary">Give Mark</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowSubmittedAssignment;
