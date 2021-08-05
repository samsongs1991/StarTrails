import React from "react";
import MarkerManager from "../../util/marker_manager";

const mapOptions = {
    center: { lat: 31.8124, lng: -106.4213 }, 
    zoom: 13
};

class TrailsMap extends React.Component {
    componentDidMount() {
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        google.maps.event.addListener(this.map, 'idle', () => {
            let bounds =  this.map.getBounds();
            // getBounds returns a LatLngBounds google object
            let n = bounds.getNorthEast().lat();
            let e = bounds.getNorthEast().lng();
            let s = bounds.getSouthWest().lat();
            let w = bounds.getSouthWest().lng();
            console.log(n, e, s, w);

            let filter = { bounds: {
                northEast: { lat: n, lng: e }, 
                southWest: { lat: s, lng: w }
            }};
            this.props.updateFilter(filter);
        });        

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

export default TrailsMap;