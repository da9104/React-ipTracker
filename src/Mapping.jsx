import { useRef, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Box from '@mui/material/Box';
import L from 'leaflet';
import marker from './assets/icon-location.svg';

export const myIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor:  [-0, -0],
    iconSize: [32,45],     
});

export function MyMarker({latitude, longitude, ip, ip_name}) {
  const position = [latitude, longitude];

  function openPopup(e) {
      e.target.openPopup();
  }

  return (
      <Marker icon={myIcon} position={position} eventHandlers={{ add: openPopup }}>
          <Popup closeButton={false} autoClose={false} closeOnClick={false}>
            {ip} <br/>
            {ip_name}
          </Popup>
      </Marker>
  )
}


const Mapping = ({ ip, lat, lng }) => {
    const mapRef = useRef(null)
    const latitude = lat 
    const longitude = lng 
  
    return ( 
      <Box style={{ position: "relative", top: "-135px", zIndex: '-1' }}>
        <MapContainer 
        center={[latitude, longitude]} 
        zoom={13} 
        ref={mapRef} 
        style={{height: "90vh", width: "100vw"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MyMarker latitude={latitude} longitude={longitude} ip={ip.ip} ip_name={ip.isp}/>
        </MapContainer>
    </Box>
    );
  };
  
export default Mapping;