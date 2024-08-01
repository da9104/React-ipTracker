import { useEffect, useState } from "react";


export default function ShowDetails({ ip, location }) {
    return (
        <>
            <ul style={{listStyle: 'none'}}>
                <li> {ip.ip}</li>
                <li> {ip.isp}</li>
                <li> {location.city} </li>
                <li> {location.country} </li>
                <li> {location.lat} </li>
                <li> {location.lng} </li>
            </ul>
         
        </>    
)}