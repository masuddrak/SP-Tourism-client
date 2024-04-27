import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/countries")
            .then(res => res.json())
            .then(data => {
                setCountries(data)
            })
    }, [])
    return (
        <div>
            <div className="text text-center my-3">
                <h3 className="text-3xl font-bold">All Country Touris Spots</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 my-10">
                {
                    countries.map(country => <Link to={`/tourists/${country.country_name}`} key={country._id}>
                        <div className="rounded-sm bg-base-100 shadow-sm">

                            <figure><div style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${country.image_url})` }} className=" min-h-[20vh] w-full bg-center bg-no-repeat  flex items-center  bg-cover bg-slate-900	rounded-md relative">
                                <div className='m-3 text-white text-center'>
                                    <h3 className="text-xl font-bold">{country.country_name}</h3>
                                    <p>{country.description}</p>
                                </div>
                            </div></figure>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Countries;