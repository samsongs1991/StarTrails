import React from "react";
import { trailLocation } from "../../../util/trail_show_util";
import { Link } from "react-router-dom";

class ListTrails extends React.Component {
    constructor(props) {
        super(props);
        this.showTrails = this.showTrails.bind(this);
        this.handleDestroyListTrailRelation = this.handleDestroyListTrailRelation.bind(this);
        this.deleteTrailButton = this.deleteTrailButton.bind(this);
    }
    
    deleteTrailButton(trail) {
        if(this.props.authUser) {
            return (
                <button onClick={() => this.handleDestroyListTrailRelation(this.props.list.id, trail.id)} >Remove from list</button>
            );
        }
    }

    showTrails() {
        if(this.props.list.trails === {} || this.props.list.trails === undefined) {
            return null;
        } else {
            return (
                Object.values(this.props.list.trails).map(trail => (
                    <div className="list-trail-item" key={trail.id} >
                        <Link to={`/trails/${trail.id}`} ><li>{trail.name} - {trailLocation(trail)}</li></Link>
                        {this.deleteTrailButton(trail)}
                    </div>
                ))
            );
        }
    }
    
    handleDestroyListTrailRelation(listId, trailId) {
        const { listTrailRelations } = this.props.lists[listId];
        const relationsArr = Object.values(listTrailRelations);
        let listTrailRelationId = null;
        for(let i = 0; i < relationsArr.length; i++) {
            if(relationsArr[i].trail_id === trailId) {
                listTrailRelationId = relationsArr[i].id;
                break;
            }
        }
        this.props.destroyListTrailRelation(listTrailRelationId);
    }

    render() {
        const { list, hideListTrailsModal, show } = this.props;
        if(show) {
            return (
                <div>
                    <ul>
                        {this.showTrails()}
                    </ul>
                    <button onClick={hideListTrailsModal} >Close</button>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default ListTrails;