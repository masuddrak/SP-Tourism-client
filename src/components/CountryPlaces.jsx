import { useLoaderData } from "react-router-dom";
import CountryCard from "./CountryCard";


const CountryPlaces = () => {
    const loaderData=useLoaderData()
    
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            {
                loaderData.map(placeData=><CountryCard key={placeData._id} placeData={placeData}></CountryCard>)
            }
        </div>
    );
};

export default CountryPlaces;