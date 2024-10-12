import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import teslaData from "./data/tesla-sites.json";

function App() {
  const filteredData = teslaData.filter(
    (tsla) => tsla.address.country === "Italy"
  );
  return (
    <MapContainer
      center={[42.585444, 13.257684]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {filteredData.map((tsla) => (
        <Marker
          key={tsla.id}
          position={[tsla.gps.latitude, tsla.gps.longitude]}
        >
          <Popup>
            <h2>{`Name: ${tsla.name}`}</h2>
            <p>{`Status: ${tsla.status}`}</p>
            <p>{`Number of Charging Stations: ${tsla.stallCount}`}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default App;
