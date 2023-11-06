import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../firebase/Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
const UpdateAssignment = () => {

    const updateAssignment =useLoaderData()
    const {
        assignmentTitle,
        marks,
        _id,
        dueDate,
        difficultyLevel,
        description,
        photo,
      
      } = updateAssignment

    const {user} = useContext(AuthContext)
    const assignmentAddedByUserEmail = user?.email
    console.log(assignmentAddedByUserEmail);
    

  //handle form

  const handleUpdateAssignment = (event) => {
    event.preventDefault();

    const form = event.target;

    const assignmentTitle = form.assignmentTitle.value;
    const difficultyLevel = form.difficultyLevel.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const marks = form.marks.value;
    const dueDate = form.date.value;

    const UpdatedAssignment = {
      assignmentTitle,
      marks,
      dueDate,
      difficultyLevel,
      description,
      photo,
      assignmentAddedByUserEmail
    };
    console.log(UpdatedAssignment);

    // send books to server
    // fetch("http://localhost:5000/api/v1/addnewassignments", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newBook),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       Swal.fire({
    //         title: "Success!",
    //         text: "Product Added Successfully",
    //         icon: "success",
    //         confirmButtonText: "Cool",
    //       });
    //     }
    //   });
  };
  return (
    <div className=" p-24">
      <h2 className="text-3xl font-extrabold">Create Assignment</h2>
      <form onSubmit={handleUpdateAssignment}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Assignment Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="assignmentTitle"
                placeholder="Assignment Title"
                defaultValue={assignmentTitle}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control  md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Difficulty Level</span>
            </label>
            <select
              name="difficultyLevel"
              defaultValue={difficultyLevel}
              className="select select-bordered select-md w-full max-w-xs"
            >
              <option disabled selected>
              Difficulty Level
              </option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
              
            </select>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Assignment Due Date</span>
            </label>
            <label className="input-group">
              <input
                type="date"
                name="date"
                placeholder="Due date"
                defaultValue={dueDate}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Assignment Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Description"
                defaultValue={description}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Assignment Marks</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="marks"
                placeholder="Assignment Marks"
                defaultValue={marks}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                
                defaultValue={photo}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update Assignment" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateAssignment;
