import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";
import auth from "../firebase/firebase.config";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";


const Header = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    // initially set the theme and "listen" for changes to apply them to the HTML tag
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);
    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allTouristsSpot">All Tourists Spot</NavLink></li>
        <li><NavLink to="/addTouristsSpot">Add Tourists Spot</NavLink></li>
        <li><NavLink to="/myList">My List</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>
    const { user, logoutUser, setLoader } = useContext(authContext)
    const logoutHandler = () => {
        logoutUser(auth)
        setLoader(false)
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-20">
                            {navlinks}
                        </ul>
                    </div>
                    <Link className="text-xl font-extrabold">SP~Tourism</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 z-20">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end ">
                    {/* themset */}
                    <label className="swap swap-rotate">
                        <input onClick={toggleTheme} type="checkbox" />
                        <div className="swap-on text-3xl"><CiDark></CiDark></div>
                        <div className="swap-off text-3xl"><MdDarkMode></MdDarkMode></div>
                    </label>

                    {/* themset */}

                    {user ? <div className="z-20">

                        <div className="dropdown dropdown-end dropdown-hover">
                            <div tabIndex={0} className=" m-1"><img className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] object-cover rounded-full" src={user?.photoURL}></img></div>
                            <ul tabIndex={0} className="dropdown-content z-[10]  menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>{user?.displayName}</a></li>
                                <li><button onClick={logoutHandler} className="btn bg-slate-500">Logout</button></li>
                            </ul>
                        </div>
                    </div> : <Link to="/login" className="btn">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Header;