export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(trails) {
        // trails argument is now an object
        // trails is not an array
        // trails.forEach (trail => {
        //     if(this.markers[trail.id] === undefined) {
        //         this.createMarkerFromTrail(trail);
        //     }
        // });
        
        for(let trailId in trails) {
            if(this.markers[trailId] === undefined) {
                this.createmarkerFromTrail(trails[trailId]);
            }
        }

        for(let trailId in this.markers) {
            if(trails[trailId] === undefined) {
                this.removeMarker(this.markers[trailId]);
            }
        }
    }

    removeMarker(marker) {
        // remove marker from the map
        marker.setMap(null);
        // remove marker from the markers obj
        delete this.markers[marker];
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