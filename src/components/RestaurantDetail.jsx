import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import PropTypes from "prop-types"
import 'leaflet/dist/leaflet.css';



const RestaurantDetail = ({ restaurant, showMap }) => {
    return showMap ? (
        <div className="restaurant-detail">
            <h2>{restaurant.name}</h2>
            <p>{restaurant.address}</p>
            <div className="restaurant-map">
                <MapContainer
                    center={[restaurant.latitude, restaurant.longitude]}
                    zoom={13}
                    style={{ height: '100vh', width: '100vw' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />          <Marker position={[restaurant.latitude, restaurant.longitude]}>
                        <Popup>{restaurant.name}</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    ) : null;
};

RestaurantDetail.propTypes = {
    restaurant: PropTypes.object,
    showMap: PropTypes.bool,
}

export default RestaurantDetail;