import React from "react";

class ListForm extends React.Component {

    constructor(props) {
        super(props);
        this.state={ 
            title: "", 
            user_id: props.currentUserId
        }
        this.handleCreateList = this.handleCreateList.bind(this);
    }

    update(field) {
        return (
            e => this.setState({ [field]: e.currentTarget.value })
        );
    }

    handleCreateList() {
        this.props.createList(this.state);
    }
    
    render() {
        return (
            <div>
                <h3>Create a new list</h3>
                <input onChange={this.update("title")} type="text" value={this.state.title} />
                <button onClick={e => console.log("this button will hide list form - toggle show:false")}>Cancel</button>
                {/* cancel button will toggle the list form show */}
                <button onClick={this.handleCreateList} >Create</button>
                {/* create will fire an action */}
            </div>
        );
    }
}

export default ListForm;