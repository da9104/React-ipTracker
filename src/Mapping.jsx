import { useRef, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Box from '@mui/material/Box';

const Mapping = ({ ip, lat, lng }) => {
    const mapRef = useRef(null)
    const latitude = lat 
    const longitude = lng 
 
    return ( 
      <Box style={{ position: "relative", top: "-10px", zIndex: '-1' }}>
        <MapContainer 
        center={[latitude, longitude]} 
        zoom={13} 
        ref={mapRef} 
        style={{height: "90vh", width: "100vw"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]} >
                <Popup>
                  {`${ip.ip}`} <br/>
                  {`${ip.isp}`} 
                </Popup>
            </Marker>
        </MapContainer>
    </Box>
    );
  };
  
  export default Mapping;