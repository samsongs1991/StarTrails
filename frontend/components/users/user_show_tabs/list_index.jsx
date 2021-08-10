import React from "react";
import ListForm from "./list_form";
import ListIndexItem from "./list_index_item";

class ListIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false }
        this.showCreateListButton = this.showCreateListButton.bind(this);
        this.showFormModal = this.showFormModal.bind(this);
    }

    showFormModal() {
        this.setState({ show: true });
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

    render() {
        const { userId, currentUserId, lists, createList } = this.props
        console.log(this.state);
        return (
            <div>
                <div>
                    <h3>Lists</h3>
                    {this.showCreateListButton(userId, currentUserId)}
                </div>

                <ListForm show={this.state.show} createList={createList} currentUserId={currentUserId} show={false} />

                <div>
                    <ul>
                        {Object.values(lists).map(list => (
                            <ListIndexItem list={list} key={list.id} />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ListIndex;