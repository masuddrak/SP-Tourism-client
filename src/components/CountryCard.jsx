import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { MdOutlineAccountBalance } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdPriceCheck } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";

const CountryCard = ({placeData}) => {
    const { _id,image, tourists_spot_name, average_cost,country_Name,location, description, seasonality } = placeData
    // console.log(parseInt(average_cost),average_cost)
    return (
        <div>
            <div className="card  bg-base-100 shadow-sm">
                <figure><img src={image} alt="cox bazzar" /></figure>
                <div className="p-2 space-y-2">
                    <h2 className="card-title">{tourists_spot_name}</h2>
                    <div className='grid grid-cols-2 gap-3'>
                        <p className="flex items-center"><MdOutlineAccountBalance></MdOutlineAccountBalance>{country_Name}</p>
                        <p className="flex items-center"><IoLocationOutline></IoLocationOutline> {location.length>20?<div>
                        {location.slice(0,20)}....
                    </div>:location}</p>
                        <p className="flex items-center"><MdPriceCheck></MdPriceCheck> {average_cost}</p>
                        <p className="flex items-center"><AiOutlineSafety></AiOutlineSafety>{seasonality}</p>
                        
                    </div>
                    <p>{description.length>80?<div>
                        {description.slice(0,80)}....
                    </div>
                   
                    :description}</p>
                    <div className="card-actions ">
                        <Link to={`/spotDetails/${_id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;
CountryCard.propTypes = {
    placeData: PropTypes.object,
}