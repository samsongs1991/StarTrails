import React from "react";

class ListForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleCreateListTrailRelation = this.handleCreateListTrailRelation.bind(this);
    }

    componentDidMount() {
        this.props.fetchLists(this.props.currentUserId);
    }

    handleCreateListTrailRelation(listId, trailId) {
        // ADD A CONDITIONAL --> if trail already exists in list, remove trail
        // else, continue with what's below
        this.props.createListTrailRelation(listId, trailId);
    }
    
    render() {
        const { show, lists, trail, hideFormModal } = this.props;

        if(show) {
            return (
                <div>
                    <h3>Save to list</h3>
                    <button onClick={hideFormModal} >Close</button>
                    <ul>
                        {Object.values(lists).map(list => (
                            <li key={list.id} >
                                <div>{list.title}</div>
                                <button onClick={() => this.handleCreateListTrailRelation(list.id, trail.id)} >Add to list</button>
                                {/* conditionally render an add or remove button */}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default ListForm;