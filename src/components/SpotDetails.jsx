import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {
    const loaderData=useLoaderData()
    const { _id,image, tourists_spot_name, average_cost, totaVisitorsPerYear, travel_time, seasonality } = loaderData
    return (
        <div>
            <h1>Show Details Spot</h1>
            <h1>{tourists_spot_name}</h1>
        </div>
    );
};

export default SpotDetails;