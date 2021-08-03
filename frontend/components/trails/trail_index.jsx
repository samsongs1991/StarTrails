import React from "react";
import { Link } from "react-router-dom";

class TrailIndex extends React.Component {
    componentDidMount() {
        this.props.fetchTrails();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.trails.map(trail => (
                        <li key={trail.id} >{trail.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TrailIndex;