import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Spot = ({ spot }) => {
    const { _id,image, tourists_spot_name, average_cost, totaVisitorsPerYear, travel_time, seasonality } = spot
    // console.log(parseInt(average_cost),average_cost)
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={image} alt="cox bazzar" /></figure>
                <div className="p-2 space-y-2">
                    <h2 className="card-title">{tourists_spot_name}</h2>
                    <div className='grid grid-cols-2 gap-3'>
                        <p>Average Cost: ${average_cost}</p>
                        <p>Visitors PerYear: {totaVisitorsPerYear}</p>
                        <p>Travel Time: {travel_time}</p>
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