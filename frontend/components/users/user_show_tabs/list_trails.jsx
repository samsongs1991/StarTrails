import React from "react";

const ListTrails = props => {
    if(props.show) {
        return (
            <div>
                LIST TRAILS MODAL
                {/* will show a box with 
                - list title
                - ul of trails
                - - each trail clicked will lead to its show page */}
                <button onClick={props.hideListTrailsModal} >Close</button>
            </div>
        );
    } else {
        return null;
    }
}

export default ListTrails;