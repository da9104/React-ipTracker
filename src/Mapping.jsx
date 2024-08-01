import { useRef, useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from 'leaflet';

const Mapping = ({ lat, lng }) => {
  //  const containerRef = useRef(null);
    const mapRef = useRef(null)
    const latitude = lat 
    const longitude = lng 
  
    // useEffect(() => {

    //   }, [lat, lng]);

    return ( 
      // Make sure you set the height and width of the map container otherwise the map won't show
        <MapContainer 
        center={[latitude, longitude]} 
        zoom={13} 
        ref={mapRef} 
        style={{height: "50vh", width: "100vw"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Additional map layers or components can be added here */}
        </MapContainer>
    );
  };
  
  export default Mapping;