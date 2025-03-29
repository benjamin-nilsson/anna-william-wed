import "./Location.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Church from "../../images/Church.png";
import FestLokal from "../../images/FestLokal.png";

function Location() {
    const mapContainerStyle = {
        width: "100%",
        height: "200px",
        borderRadius: "8px",
        marginBottom: "2rem"
    };

    const vigsel = { lat: 58.1137356, lng: 12.5216142 };
    const fest = { lat: 58.1167, lng: 12.5333 };

    const vigselUrl = `https://www.google.com/maps?q=${vigsel.lat},${vigsel.lng}`;
    const festUrl = `https://www.google.com/maps?q=${fest.lat},${fest.lng}`;

    return (
        <LoadScript googleMapsApiKey="AIzaSyCJg4ig0r-opZPKFbb1NvZL2dSsAoaXU8c">
            <section className="location-section">
                <h2 className="text-3xl font-semibold">Plats</h2>

                {/* Vigsel Section */}
                <div className="location-container">
                    <img src={Church} alt="Vigsel plats" className="location-image" />
                    <div className="rsvp-map">
                        <div className="map-header">Vigsel plats | Erska byväg 23, 441 72 Sollebrunn</div>
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={vigsel} // ✅ Fixed
                            zoom={15}
                            onClick={() => window.open(vigselUrl, "_blank")}
                        >
                            <Marker position={vigsel} />
                        </GoogleMap>
                    </div>
                </div>

                {/* Fest Section */}
                <div className="location-container">
                    <img src={FestLokal} alt="Fest lokal" className="location-image" />
                    <div className="rsvp-map">
                        <div className="map-header">Fest lokal | Wasaallén 10, 466 95 Sollebrunn</div>
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={fest} // ✅ Fixed
                            zoom={15}
                            onClick={() => window.open(festUrl, "_blank")}
                        >
                            <Marker position={fest} />
                        </GoogleMap>
                    </div>
                </div>
            </section>
        </LoadScript>
    );
}

export default Location;
