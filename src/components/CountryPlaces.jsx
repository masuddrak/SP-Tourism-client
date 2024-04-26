import { useLoaderData } from "react-router-dom";


const CountryPlaces = () => {
    const loaderData=useLoaderData()
    console.log(loaderData)
   
    return (
        <div>
            <h1>country place</h1>
        </div>
    );
};

export default CountryPlaces;