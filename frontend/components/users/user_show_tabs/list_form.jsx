import React from "react";

class ListForm extends React.Component {

    constructor(props) {
        super(props);
        this.state={ 
            title: "", 
            user_id: props.currentUserId, 
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
        this.setState({ title: "" });
        this.props.hideFormModal();
    }
    
    render() {
        if(this.props.show) {
            return (
                <div>
                    <h3>Create a new list</h3>
                    <input onChange={this.update("title")} type="text" value={this.state.title} />
                    <button onClick={this.props.hideFormModal}>Cancel</button>
                    <button onClick={this.handleCreateList} >Create</button>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default ListForm;