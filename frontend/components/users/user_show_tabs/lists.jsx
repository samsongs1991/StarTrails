import React from "react";
import ListForm from "./list_form";
import ListItem from "./list_item";

class Lists extends React.Component {
    constructor(props) {
        super(props);
        this.showCreateListButton = this.showCreateListButton.bind(this);
    }

    componentDidMount() {
        this.props.fetchLists(this.props.userId);
    }

    showCreateListButton(userId, currentUserId) {
        if(userId === currentUserId) {
            return (
                <button onClick={e => console.log("this button will show the list form - toggle show:true")} >Create a list</button>
            );
        }
    }

    render() {
        const { userId, currentUserId, lists, createList } = this.props
        return (
            <div>
                <div>
                    <h3>Lists</h3>
                    {this.showCreateListButton(userId, currentUserId)}
                </div>

                <ListForm createList={createList} currentUserId={currentUserId} show={false} />

                <div>
                    <ul>
                        {Object.values(lists).map(list => (
                            <ListItem list={list} key={list.id} />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Lists;