import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/Footer";


const Layout = () => {
    return (
        <div className="">
            <div className="md:container  md:mx-auto mx-3">
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            <ToastContainer />

        </div>
    );
};

export default Layout;