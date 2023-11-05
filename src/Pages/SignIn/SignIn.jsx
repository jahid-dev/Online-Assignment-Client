import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/Provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc';

const SignIn = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const result = await signInUser(email, password);
            toast.success("Welcome back, " + result.user.displayName + "!");
            navigate(location?.state ? location.state : "/");
            e.target.reset();
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                toast.success("Welcome back, " + result.user.displayName + "!");
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                setError(error.message);
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
                                    placeholder="Your email"
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
                                    placeholder="Your password"
                                    required
                                    className="input input-bordered"
                                />
                                <label className="label">
                                    <Link to="/forgot-password" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </Link>
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

export default SignIn;
