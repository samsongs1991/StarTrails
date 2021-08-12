import React from "react";
import { trailLocation } from "../../../util/trail_show_util";
import { Link } from "react-router-dom";

class ListTrails extends React.Component {
    constructor(props) {
        super(props);
        this.showTrails = this.showTrails.bind(this);
        this.handleDestroyListTrailRelation = this.handleDestroyListTrailRelation.bind(this);
    }
    
    showTrails() {
        if(this.props.list.trails === {} || this.props.list.trails === undefined) {
            return null;
        } else {
            return (
                Object.values(this.props.list.trails).map(trail => (
                    <div key={trail.id} >
                        <Link to={`/trails/${trail.id}`} ><li>{trail.name} - {trailLocation(trail)}</li></Link>
                        <button onClick={() => this.handleDestroyListTrailRelation(this.props.list.id, trail.id)} >Remove from list</button>
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
                    <h3>{list.title}</h3>
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