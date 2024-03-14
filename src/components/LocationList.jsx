import { useApiContext } from '../utils/apiContext';
import './LocationList.css';

const LocationList = ({ locations }) => {

    const {setLatitude, setLongitude} = useApiContext();

    const handleLocationClick = (lat, lon) => {
        setLatitude(lat);
        setLongitude(lon);
    };

    return (
        <div>
            <table className="location-list">
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Name</th>
                        <th>State</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {locations.map((location) => (
                        <tr key={location.name + Math.random().toString(16).slice(2)}>
                            <td>{location.country}</td>
                            <td>{location.name}</td>
                            <td>{location.state}</td>
                            <td>{location.lat}</td>
                            <td>{location.lon}</td>
                            <td><button className='select-btn' onClick={() => handleLocationClick(location.lat, location.lon)}>Select</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LocationList;