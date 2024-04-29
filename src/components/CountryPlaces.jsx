import { useLoaderData } from "react-router-dom";
import CountryCard from "./CountryCard";
import { Fade } from 'react-awesome-reveal';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { Helmet } from "react-helmet";

const CountryPlaces = () => {
    const loaderData = useLoaderData()
    const [text] = useTypewriter({
        words: [' Country place!'],
        loop: {}
    })

    return (
        <div>
            <div style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()` }} className="min-h-[20vh]  w-full bg-center bg-no-repeat  bg-cover bg-slate-900	rounded-md flex justify-center items-center">
                <div className='text-center text-white space-y-3'>
                    <Fade>
                        <h2 className='text-2xl md:text-4xl uppercase  lg:text-6xl font-bold text-white tracking-widest'>Your {text}
                            <span className='w-[1px]'>
                                <Cursor cursorColor='' />
                            </span>
                        </h2>
                    </Fade>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                {
                    loaderData.map(placeData => <CountryCard key={placeData._id} placeData={placeData}></CountryCard>)
                }
                <Helmet> <title>Your Country place!</title></Helmet>
            </div>
        </div>

    );
};

export default CountryPlaces;