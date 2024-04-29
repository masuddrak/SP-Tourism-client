import { useLoaderData } from "react-router-dom";
import Spot from "../components/Spot";
import { useState } from "react";
import useQueryTanstack from "../Hooks/useQueryTanstack";
import { IoIosArrowDown } from "react-icons/io";
import { Helmet } from "react-helmet";

const AllTouristsSpot = () => {
    const loaderData = useLoaderData()
    const [tourists, setTourist] = useState(loaderData)
    const { isLoading, refetch, data } = useQueryTanstack()

    if (isLoading) {
        return <div className="min-h-[70vh] flex justify-center items-center">
            <h1 className="text-5xl"><span className="loading loading-ring loading-lg"></span></h1>
        </div>
    }
    const handelSort = (searchData) => {
        if (searchData == "asending") {
            refetch()
            setTourist(data.sort((a, b) => a.average_cost - b.average_cost))
        }
    }
    const handelSort2 = (searchData) => {
        if (searchData == "desending") {
            refetch()
            setTourist(data.sort((a, b) => b.average_cost - a.average_cost))
        }
    }
    return (
        <div>
            <Helmet> <title>All tourists  Place</title></Helmet>
            <div className="flex justify-between">
                <h1 className="text-3xl">All tourists  Place </h1>
                <div>
                    <details className="dropdown ">
                        <summary className="m-1  btn btn-primary text-white">Sort By <IoIosArrowDown></IoIosArrowDown></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-green-300 rounded-box w-52">
                            <li onClick={() => handelSort("asending")}><a>ascending</a></li>
                            <li onClick={() => handelSort2("desending")}><a>descending</a></li>

                        </ul>
                    </details>

                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                {
                    tourists.map(spot => <Spot key={spot._id} spot={spot}></Spot>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;