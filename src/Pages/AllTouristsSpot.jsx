import { useLoaderData } from "react-router-dom";
import Spot from "../components/Spot";

const AllTouristsSpot = () => {
    const loaderData = useLoaderData()
    console.log(loaderData)
    return (
        <div>
            <h1 className="text-3xl">All tourist Page</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                {
                    loaderData.map(spot => <Spot key={spot._id} spot={spot}></Spot>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;