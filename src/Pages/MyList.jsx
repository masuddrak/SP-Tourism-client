import { useContext, useEffect, useState } from "react";
import { authContext } from "../Providers/AuthProvider";
import useQueryTanstack from "../Hooks/useQueryTanstack";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const MyList = () => {
    const { refetch, data } = useQueryTanstack()
    const { user } = useContext(authContext)
    const [tourists, setTourist] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/tourists/${user.email}`)
            .then(res => res.json())
            .then(data => {

                setTourist(data)
            })
    }, [user, data])
    const handelDeletePlace = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {


            if (result.isConfirmed) {
                fetch(`http://localhost:5000/tourists/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch()
                        console.log(data)
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }
    


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            tourists.map(tourist => <tr key={tourist._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span >{tourist.tourists_spot_name}</span>
                                </td>
                                <td>Purple</td>
                                <th className="space-x-2">
                                    <button onClick={() => handelDeletePlace(tourist._id)} className="px-3 py-1 bg-warning">Delete</button>
                                    <Link to={`/udatePlace/${tourist._id}`} className="px-3 py-1 bg-success">Update</Link>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;