import React, { Component } from "react";
import {
  GoogleMap,
  LoadScript,
  InfoBox,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

class MapContainer extends Component {
  render() {
    const center = {
      lat: 44.076613,
      lng: -98.362239833
    };

    const mapContainerStyle = {
      height: "600px",
      width: "100%"
    };

    const options = { closeBoxURL: "", enableEventPropagation: true };

    const onLoad = infoBox => {
      console.log("infoBox: ", infoBox);
    };

    const onLoad2 = marker => {
      console.log("marker: ", marker);
    };

    function activate() {
      console.log("lmao");
    }
    return (
      <div className="container text-center">
        <h1>:)</h1>
        <LoadScript
          id="script-loader"
          googleMapsApiKey="AIzaSyAOgdcnYspbhgXiRsb_RsP_a96B0DQiQ5c"
        >
          <GoogleMap
            id="example-map"
            center={center}
            mapContainerStyle={mapContainerStyle}
            zoom={10}
          >
            <Marker
              onLoad={onLoad2}
              position={center}
              //       icon={"https://i.imgur.com/uRNnam7.jpg"}
              //label={"Dicks"}
              onClick={activate}
            />
          </GoogleMap>
        </LoadScript>
      </div>
    );
  }
}

export default MapContainer;
//Key: AIzaSyAOgdcnYspbhgXiRsb_RsP_a96B0DQiQ5c
