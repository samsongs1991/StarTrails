import React from "react";

class Lists extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h3>Lists</h3>
                    <button>Create a list</button>
                    {/* Create a onClick handler for button */}
                </div>

                <div>
                    <ul>
                        <li>List item component 1</li>
                        <li>List item component 2</li>
                        <li>List item component 3</li>
                        {/* Create list item components */}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Lists;