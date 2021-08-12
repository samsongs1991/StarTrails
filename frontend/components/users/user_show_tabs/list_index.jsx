import React from "react";
import ListForm from "./list_form";
import ListIndexItem from "./list_index_item";

class ListIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false }
        this.showCreateListButton = this.showCreateListButton.bind(this);
        this.showFormModal = this.showFormModal.bind(this);
        this.hideFormModal = this.hideFormModal.bind(this);
        this.showLists = this.showLists.bind(this);
    }

    showFormModal() {
        this.setState({ show: true });
    } 

    hideFormModal() {
        this.setState({ show: false });
    }

    componentDidMount() {
        this.props.fetchLists(this.props.userId);
    }

    showCreateListButton(userId, currentUserId) {
        if(userId === currentUserId) {
            return (
                <button onClick={this.showFormModal} >Create a list</button>
            );
        }
    }

    showLists() {
        if(this.props.lists === {} || this.props.lists === undefined) {
            return null;
        } else {
            return (
                Object.values(this.props.lists).map(list => (
                    <ListIndexItem destroyList={this.props.destroyList} list={list} key={list.id} />
                ))
            );
        }
    }


    render() {
        const { userId, currentUserId, createList } = this.props
        return (
            <div>
                <div>
                    <h3>Lists</h3>
                    {this.showCreateListButton(userId, currentUserId)}
                </div>

                <ListForm hideFormModal={this.hideFormModal} show={this.state.show} createList={createList} currentUserId={currentUserId} />

                <div>
                    <ul>
                        {this.showLists()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ListIndex;