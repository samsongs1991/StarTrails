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

    handleDestroyListTrailRelation(listTrailRelationId) {
        this.props.destroyListTrailRelation(listTrailRelationId);
    }

    addRemoveButton(list, trail, listTrailRelationId) {
        if(list.trails[trail.id]) {
            return (
                <button onClick={() => this.handleDestroyListTrailRelation(listTrailRelationId)} >Remove from list</button>
            );
        } else {
            return (
                <button onClick={() => this.handleCreateListTrailRelation(list.id, trail.id)} >Add to list</button>
            );
        }
    }
    
    render() {
        const { show, lists, trail, hideFormModal, fetchListTrailRelations } = this.props;
        
        if(show) {
            return (
                <div>
                    <h3>Save to list</h3>
                    <button onClick={hideFormModal} >Close</button>
                    <ul>
                        {Object.values(lists).map(list => {
                            // fetchListTrailRelations(list.id);
                        
                            return (
                                <li key={list.id} >
                                    <div>{list.title}</div>
                                    {this.addRemoveButton(list, trail)}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default ListTrailForm;