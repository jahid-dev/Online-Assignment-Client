import { useEffect, useState } from "react";
import ShowSubmittedAssignment from "../Assignments/ShowSubmittedAssignment";


const SubmittedAssignments = () => {

    const [submitAssignment, setSubmitAssignment] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/api/v1/takenewassignments')
        .then(res => res.json())
        .then(data => {
            setSubmitAssignment(data)
        })

    }, [])

    return (
        <div className="max-w-[1200px] mt-20 mx-auto">
            {submitAssignment.length}
            <div>
                {
                        submitAssignment?.map(submit => <ShowSubmittedAssignment key={submit.id} submit={submit}></ShowSubmittedAssignment>)
                }
            </div>
        </div>
    );
};

export default SubmittedAssignments;