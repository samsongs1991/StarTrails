export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(trails) {
        // for each trail, if the id isn't a key in this.markers
        // then make a new marker from it 
        // and add it to the map and this.markers
    }

    createMarkerFromTrail(trail) {
        // adds a marker to the map and this.markers
    }

}