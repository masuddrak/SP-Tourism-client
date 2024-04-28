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
import SpotDetails from "./components/SpotDetails";
import CountryPlaces from "./components/CountryPlaces";
import UpdatePlace from "./components/UpdatePlace";
import NotFount from "./Pages/NotFount";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement:<NotFount></NotFount>,
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
                element: <AllTouristsSpot></AllTouristsSpot>,
                loader:()=>fetch("http://localhost:5000/tourists")
            },
            {
                path: "/spotDetails/:_id",
                element: <PrivetRoute><SpotDetails></SpotDetails></PrivetRoute>,
                loader:({params})=>fetch(`http://localhost:5000/touristsDetails/${params._id}`)
            },
            {
                path: "/udatePlace/:_id",
                element:<PrivetRoute><UpdatePlace></UpdatePlace></PrivetRoute> ,
                loader:({params})=>fetch(`http://localhost:5000/touristsDetails/${params._id}`)
            },
            {
                path: "/tourists/:country",
                element: <CountryPlaces></CountryPlaces>,
                loader:({params})=>fetch(`http://localhost:5000/countryplace/${params.country}`)
            },
            {
                path: "/myList",
                element: <PrivetRoute><MyList></MyList></PrivetRoute>,
                
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