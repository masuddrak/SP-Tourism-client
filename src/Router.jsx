import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import AddTouristsSpot from "./Pages/AddTouristsSpot";
import AllTouristsSpot from "./Pages/AllTouristsSpot";
import MyList from "./Pages/MyList";
import Login from "./Pages/Login";
import Registeter from "./Pages/Registeter";
import PrivetRoute from "./Providers/PrivetRoute";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addTouristsSpot",
                element: <PrivetRoute><AddTouristsSpot></AddTouristsSpot></PrivetRoute>
            },
            {
                path: "/allTouristsSpot",
                element: <AllTouristsSpot></AllTouristsSpot>
            },
            {
                path: "/myList",
                element: <PrivetRoute><MyList></MyList></PrivetRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Registeter></Registeter>
            },
           
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
]);
export default router