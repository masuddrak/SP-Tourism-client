import { useContext, useEffect } from "react";
import { authContext } from "../Providers/AuthProvider";

const MyList = () => {
    const {user}=useContext(authContext)
    console.log(user.email)
    useEffect(()=>{
        fetch(`http://localhost:5000/tourists/${user.email}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[user])
    return (
        <div>
            <h2 className="text-3">My Addded List</h2>
        </div>
    );
};

export default MyList;