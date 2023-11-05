import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/Provider/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photo.value;
    console.log(name, email, password);

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password dosen't have any UpperCase");
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\|/]/.test(password)) {
      toast.error("Password dosen't have special characters");
      return;
    }

    //create user in firebase
    createUser(email, password)
      .then((userCredential) => {
        // User created successfully
        const user = userCredential.user;

        // Set the user's display name
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            toast.success("Register success")
            setUser((prevUser) => {
              prevUser.displayName = name;
              prevUser.photoURL = photoURL;
              return { ...prevUser };
            })
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message)
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Please provide a valid photo link"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="text-center text-gray-600">
              Already part of our community? Welcome back!
            </p>
            <div className="flex justify-center items-center mt-4">
              <Link to="/login">
                <button className="btn btn-link">
                  Login Now
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
