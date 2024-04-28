import { useEffect, useState } from "react";
import Spot from "./Spot";

const TouristsSpotSection = () => {
    const [tourists,setTourist]=useState([])
    useEffect(()=>{
        fetch("https://sp-tourists-spot-server.vercel.app/tourists")
        .then(res=>res.json())
        .then(data=>{
            const sliceData=data.slice(0,6)
            setTourist(sliceData)
        })
    },[])
    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-4">
                {
                    tourists.map(spot => <Spot key={spot._id} spot={spot}></Spot>)
                }
            </div>
        </div>
    );
};

export default TouristsSpotSection;