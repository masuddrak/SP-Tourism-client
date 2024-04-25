import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { authContext } from "./AuthProvider";

const PrivetRoute = ({children}) => {
    const { user,  } = useContext(authContext)
    const location = useLocation()
    console.log(location)
    // if (setLoader) {
    //     return <div className="min-h-[70vh] flex justify-center items-center">
    //         <h1 className="text-5xl">loading....</h1>
    //     </div>
    // }
    if (user) {
        return children
    }

    return (<Navigate to="/login" state={location.pathname}></Navigate>);
};

export default PrivetRoute;
PrivetRoute.propTypes = {
    children: PropTypes.node,
}