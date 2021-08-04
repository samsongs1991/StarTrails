import React from "react";
import MarkerManager from "../../util/marker_manager";

class Map extends React.Component {
    componentDidMount() {
        const mapOptions = {
            center: { lat: 31.8124, lng: -106.4213 }, 
            zoom: 13
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
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
            />
        );
    }
}

export default Map;