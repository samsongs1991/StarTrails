import React from "react";
import ListTrails from "./list_trails";

class ListIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false }
        this.showListTrailsModal = this.showListTrailsModal.bind(this);
        this.hideListTrailsModal = this.hideListTrailsModal.bind(this);
        this.deleteListButton = this.deleteListButton.bind(this);
    }

    showListTrailsModal() {
        this.setState({ show: true });
    }

    hideListTrailsModal() {
        this.setState({ show: false })
    }

    deleteListButton() {
        if(this.props.authUser) {
            return (
                <button onClick={() => this.props.destroyList(this.props.list.id)} >Delete list</button>
            );
        }
    }

    render() {
        return (
            <li>
                <button onClick={this.showListTrailsModal} >{this.props.list.title}</button>
                {this.deleteListButton()}
                <ListTrails authUser={this.props.authUser} destroyListTrailRelation={this.props.destroyListTrailRelation} lists={this.props.lists} list={this.props.list} hideListTrailsModal={this.hideListTrailsModal} show={this.state.show} />
            </li>
        );
    }
}

export default ListIndexItem;