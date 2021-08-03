import React from "react";
import { Link } from "react-router-dom";

class TrailIndex extends React.Component {
    componentDidMount() {
        this.props.fetchTrails();
    }

    render() {
        return (
            <div>
                <h1>TRAIL INDEX IS WORKING!</h1>
            </div>
        );
    }
}

export default TrailIndex;