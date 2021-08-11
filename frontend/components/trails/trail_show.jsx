import React from "react";

class TrailShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchTrail(this.props.trailId);
    }

    render() {
        console.log(this.props);
        return (
            <div className="trail-show" >
                Trail Show component is working

            </div>
        );
    }
}

export default TrailShow;