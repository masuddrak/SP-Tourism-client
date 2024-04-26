import { useLoaderData } from "react-router-dom";
import Spot from "../components/Spot";

const AllTouristsSpot = () => {
    const loaderData = useLoaderData()
   
    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-3xl">All tourists  Place </h1>
                <div>
                   

                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                {
                    loaderData.map(spot => <Spot key={spot._id} spot={spot}></Spot>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;