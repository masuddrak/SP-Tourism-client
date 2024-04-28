import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const Spot = ({ spot }) => {
    const { _id, image, tourists_spot_name,country_Name, average_cost, totaVisitorsPerYear, travel_time, seasonality } = spot
    // console.log(parseInt(average_cost),average_cost)

    return (
        <div id="my-anchor-element">
            <a ></a>
            <Tooltip
                anchorSelect="#my-anchor-element"
                content={country_Name}
            />
            <div className="card w-full h-full  bg-base-100 shadow-sm">
                <figure><img src={image}  className='w-full h-full' alt="cox bazzar" /></figure>
                <div className="p-2 space-y-2">
                    <h2 className="card-title">{tourists_spot_name}</h2>
                    <div className='grid grid-cols-2 gap-3'>
                        <p>Average Cost: ${average_cost}</p>
                        <p>Visitors PerYear: {totaVisitorsPerYear}</p>
                        <p>Travel Time: {travel_time} days</p>
                        <p>Seasonality: {seasonality}</p>
                    </div>
                    <div className="card-actions ">
                        <Link to={`/spotDetails/${_id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spot;
Spot.propTypes = {
    spot: PropTypes.object,
}