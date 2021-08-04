export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(trails) {
        trails.forEach (trail => {
            if(this.markers[trail.id] === undefined) {
                this.createMarkerFromTrail(trail);
            }
        });
    }

    createMarkerFromTrail(trail) {
        let marker = new google.maps.Marker({
            position: {
                lat: trail.latitude, 
                lng: trail.longitude
            }, 
            map: this.map
        });
        this.markers[trail.id] = marker;
    }

}