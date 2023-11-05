import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/Provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState(null); // State to hold the error message
    

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const result = await signInUser(email, password);
            console.log(result.user);
            toast.success("Login success");
            navigate(location?.state ? location.state : "/");
            e.target.reset();
        } catch (error) {
            console.error(error);
            setError(error.message)
        }
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result.user);
                toast.success("Login success");
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
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
                                    placeholder="password"
                                    required
                                    className="input input-bordered"
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            {error && <div className="text-error mt-2">{error}</div>}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center">
                            Welcome to our community! 🚀 Curious about what we offer?{" "}
                            <Link to="/register">
                                <button className="btn btn-link text-blue-500 hover:underline">
                                    Discover More & Register
                                </button>
                            </Link>
                        </p>
                        <p className="text-center">
                            <span className="text-gray-600">Looking for a quick way to sign in?</span>
                        </p>
                        <div className="flex justify-center items-center mt-4">
                            <button onClick={handleGoogleSignIn} className="btn btn-ghost">
                                <FcGoogle className="mr-2" /> Sign in with Google
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

