import "./Location.css";  // Import the DressCode.css file
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
    
      const vigsel = {
        lat: 58.1137356,
        lng: 12.5216142,
      };
     
      const fest = {
        lat: 58.1167,
        lng: 12.5333,
      };
    
      const vigselUrl = `https://www.google.com/maps?q=${vigsel.lat},${vigsel.lng}`;
      const festUrl = `https://www.google.com/maps?q=${fest.lat},${fest.lng}`;

  return (
<section className="location-section">
  <h2 className="text-3xl font-semibold">Plats</h2>

  {/* Vigsel Section */}
  <div className="location-container">
    <img src={Church} alt="Vigsel plats" className="location-image" />
    <div className="rsvp-map">
      <div className="map-header">Vigsel plats | Erska byväg 23, 441 72 Sollebrunn</div>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap 
          mapContainerStyle={mapContainerStyle} 
          center={vigsel} 
          zoom={15}
          onClick={() => window.open(vigselUrl, "_blank")}
        >
          <Marker position={vigsel} />
        </GoogleMap>
      </LoadScript>
    </div>
  </div>

  {/* Fest Section */}
  <div className="location-container">
    <img src={FestLokal} alt="Fest lokal" className="location-image" />
    <div className="rsvp-map">
      <div className="map-header">Fest lokal | Wasaallén 10, 466 95 Sollebrunn</div>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap 
          mapContainerStyle={mapContainerStyle} 
          center={fest} 
          zoom={15}
          onClick={() => window.open(festUrl, "_blank")}
        >
          <Marker position={fest} />
        </GoogleMap>
      </LoadScript>
    </div>
  </div>
</section>
  );
}

export default Location;
