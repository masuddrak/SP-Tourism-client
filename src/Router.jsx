import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import AddTouristsSpot from "./Pages/AddTouristsSpot";
import AllTouristsSpot from "./Pages/AllTouristsSpot";
import MyList from "./Pages/MyList";
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
                element: <AddTouristsSpot></AddTouristsSpot>
            },
            {
                path: "/allTouristsSpot",
                element: <AllTouristsSpot></AllTouristsSpot>
            },
            {
                path: "/myList",
                element: <MyList></MyList>
            },
           
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
]);
export default router