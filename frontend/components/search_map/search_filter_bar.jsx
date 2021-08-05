import React from "react";

class SearchFilterBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // numFilters() {

    // }

    handleClick(filterType) {
        // show modal with appropriate filters loaded
        return
    }

    render() {
        return (
            <div>
                {/* import search bar from home page HERE */}
                <div>
                    <button onClick={() => this.handleClick("difficulty")} >Difficulty</button>
                    <form>
                        <input type="checkbox" value="easy" />
                        <label>Easy</label>
                        <input type="checkbox" value="moderate" />
                        <label>Moderate</label>
                        <input type="checkbox" value="hard" />
                        <label>Hard</label>
                    </form>
                </div>
                {/* Work on getting the difficulty modal div to hide and appear on click of difficulty button */}


                <button>Length</button>
                <button>Gain</button>
                <button>Time</button>
                <button>Category</button>
                <button>Rating</button>
            </div>
        );
    }
}

export default SearchFilterBar;