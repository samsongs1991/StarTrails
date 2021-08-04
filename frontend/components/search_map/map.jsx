import React from "react";
import MarkerManager from "../../util/marker_manager";




// const getCoordsObj = latLng = ({
//     lat: latLng.lat(), 
//     lng: latLng.lng()
// })

const mapOptions = {
    center: { lat: 31.8124, lng: -106.4213 }, 
    zoom: 13
};

class Map extends React.Component {
    componentDidMount() {
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        
        // let bounds = this.map.getBounds();
        console.log("------------------------");
        console.log(this.map);
        console.log("------------------------");
        
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.trails);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.trails);
    }

    render() {
        return (
            <div 
                id="map-container" 
                ref={ map => this.mapNode = map } 
            ></div>
        );
    }
}

export default Map;