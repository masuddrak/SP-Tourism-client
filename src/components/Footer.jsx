import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="mt-20 bg-base-200 ">
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <Link className="text-xl font-extrabold">SP~Tourism</Link>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Update Profile</a>
                    <a className="link link-hover">User Profile</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            {/* <hr className="text-gray-500  "></hr> */}
            <div className="flex justify-center mb-3 border-t-[0.2px] border-gray-300">
                <p>&copy; | Masud Rana. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;