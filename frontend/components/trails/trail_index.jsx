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
                    {Object.values(this.props.trails).map(trail => (
                        <TrailIndexItem key={trail.id} trail={trail} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default TrailIndex;