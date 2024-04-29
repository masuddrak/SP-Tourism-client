import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {
    const loaderData = useLoaderData()
    console.log(loaderData)
    const { image, tourists_spot_name, average_cost, totaVisitorsPerYear, country_Name, travel_time,location, seasonality,description,name,email } = loaderData
    return (
        <Fade cascade  damping={0.1}>
            <img className="w-full h-[250px] object-cover" src={image} alt="" />
            <div className="md:w-[80%] mx-auto translate-y-[-25px] bg-white p-4 z-10">
                <div className="md:flex justify-between">
                    <div className="space-y-1">
                        <h3><span className="text-md font-semibold">Country Name</span>: {country_Name}</h3>
                        <h3><span className="text-md font-semibold">Spot Name</span>: {tourists_spot_name}</h3>
                        <h3><span className="text-md font-semibold">Average Cost</span>: ${average_cost}</h3>
                        <h3><span className="text-md font-semibold">Tota Visitors PerYear</span>: {totaVisitorsPerYear}</h3>
                    </div>
                    <div className="space-y-1">
                        <h3><span className="text-md font-semibold">Travel Time</span>: {travel_time} days</h3>
                        <h3><span className="text-md font-semibold">Seasonality</span>: {seasonality}</h3>
                        <h3><span className="text-md font-semibold">Location</span>: {location}</h3>
                    </div>
                </div>
                <div className="mt-5">
                    <p>{description}</p>
                    <div className="mt-5">
                        <p className="font-semibold">Authore Info</p>
                        <div>
                            <p>{name}</p>
                            <p>{email}</p>
                        </div>
                    </div>
                </div>
                <Helmet> <title>{tourists_spot_name} Spot</title></Helmet>
            </div>
        </Fade>
    );
};

export default SpotDetails;