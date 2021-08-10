import React from "react";

const ListForm = props => {
    console.log(props);
    return (
        <div>List Form is here</div>
    );
}

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
                <button onClick={e => console.log("button was clicked")} >Create a list</button>
                // onClick will somehow toggle the modal show
            );
        }
    }

    render() {
        console.log(this.props);
        const { userId, currentUserId } = this.props
        return (
            <div>
                <div>
                    <h3>Lists</h3>
                    {this.showCreateListButton(userId, currentUserId)}
                </div>

                <ListForm show={false} />

                <div>
                    <ul>

                        {/* Create list item components */}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Lists;