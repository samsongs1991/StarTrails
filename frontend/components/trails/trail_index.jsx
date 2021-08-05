import React from "react";
import { Link } from "react-router-dom";
import TrailIndexItem from "./trail_index_item";

class TrailIndex extends React.Component {
    // componentDidMount() {
    //     this.props.fetchTrails();
    // }

    render() {
        return (
            <div>
                <ul>
                    {this.props.trails.map(trail => (
                        <TrailIndexItem key={trail.id} trail={trail} />
                        // <li key={trail.id} >{trail.name}</li>
                        // ^^^ create a trail index items component
                    ))}
                </ul>
            </div>
        );
    }
}

export default TrailIndex;