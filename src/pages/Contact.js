import { Map, Marker, APIProvider } from "@vis.gl/react-google-maps";
import React, { useState } from "react";
import "./Contact.css"

const API_KEY = "AIzaSyCoxCd3ZrbaeruLPg5irsJwOrBH1TS_FLU";

const Contact= () => {
    const [marker, setMarkerOnProscene] = useState({
        lat: -1.286389,
        lng: 36.817223
    });
    return (
    <APIProvider apiKey={API_KEY}>
      <div className="map">
        <Map
          style={{ borderRadius: "20px" }}
          defaultZoom={15}
          defaultCenter={marker}
          gestureHandling={"greedy"}
          disableDefaultUI
        >
          <Marker position={setMarkerOnProscene} />
        </Map>
      </div>
    </APIProvider>
  );
}

export default Contact; 
