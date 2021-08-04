import React from "react";

class Map extends React.Component {
    componentDidMount() {
        const mapOptions = {
            center: { lat: 31.8124, lng: -106.4213 }, 
            zoom: 13
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
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