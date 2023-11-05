import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Header/Navbar/Navbar";



const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
            <div><Toaster /></div>
        </div>
    );
};

export default MainLayout;