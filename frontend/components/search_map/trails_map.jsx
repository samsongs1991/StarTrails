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

            let n = bounds.getNorthEast().lat();
            let e = bounds.getNorthEast().lng();
            let s = bounds.getSouthWest().lat();
            let w = bounds.getSouthWest().lng();

            let boundsFilter = { bounds: {
                northEast: { lat: n, lng: e }, 
                southWest: { lat: s, lng: w }
            }};

            let newFilters = Object.assign({}, this.props.filters, boundsFilter);            

            this.props.updateFilters(newFilters);
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