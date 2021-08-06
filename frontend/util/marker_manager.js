export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(trails) {
        for(let trailId in trails) {
            if(this.markers[trailId] === undefined) {
                this.createMarkerFromTrail(trails[trailId]);
            }
        }
        for(let trailId in this.markers) {
            if(trails[trailId] === undefined) {
                this.removeMarker(this.markers[trailId], trailId);
            }
        }
    }

    removeMarker(marker, trailId) {
        marker.setMap(null);
        delete this.markers[trailId];
    }

    createMarkerFromTrail(trail) {
        const marker = new google.maps.Marker({
            position: {
                lat: trail.latitude, 
                lng: trail.longitude
            }, 
            map: this.map, 
            title: trail.name
        });

        // *** TEST CODE *** ------------------------------------

        const infoWindow = new google.maps.InfoWindow();
        marker.addListener("click", () => {
            // infoWindow.close();
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(marker.getMap(), marker)
        })

        // ^^^----------------------------------------------------

        this.markers[trail.id] = marker;
    }

}