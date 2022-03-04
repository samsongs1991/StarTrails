import React from "react";

class ListTrailForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleCreateListTrailRelation = this.handleCreateListTrailRelation.bind(this);
        this.handleDestroyListTrailRelation = this.handleDestroyListTrailRelation.bind(this);
        this.addRemoveButton = this.addRemoveButton.bind(this);
    }

    componentDidMount() {
        this.props.fetchLists(this.props.currentUserId);
    }

    handleCreateListTrailRelation(listId, trailId) {
        this.props.createListTrailRelation(listId, trailId);
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

    addRemoveButton(list, trail) {
        if(list.trails) {
            if(list.trails[trail.id]) {
                return (
                    <button onClick={() => this.handleDestroyListTrailRelation(list.id, trail.id)} >Remove from list</button>
                );
            } else {
                return (
                    <button onClick={() => this.handleCreateListTrailRelation(list.id, trail.id)} >Add to list</button>
                );
            }
        } else {
            return (
                <button onClick={() => this.handleCreateListTrailRelation(list.id, trail.id)} >Add to list</button>
            );
        }
    }
    
    render() {
        const { show, lists, trail, hideFormModal } = this.props;
        
        if(show) {
            return (
                <div id="list-trail-form">
                    <h3>Save to list</h3>
                    <button onClick={hideFormModal} >Close</button>
                    <ul>
                        {Object.values(lists).map(list => (
                            <li key={list.id} >
                                <div>{list.title}</div>
                                {this.addRemoveButton(list, trail)}
                            </li>
                        ))}
                        {/* Above code has bug. List of user lists is not rendering. */}
                    </ul>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default ListTrailForm;