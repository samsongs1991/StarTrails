import React from "react";

class SearchFilterBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            difficulty: { easy: false, moderate: false, hard: false }, 
            length: { min: "", max: "" },
            gain: { min: "", max: "" },
            time: { 
                min: { hrs: "", mins: "" }, 
                max: { hrs: "", mins: "" }
            },
            category: { loop: false, outAndBack: false, pointToPoint: false },
            rating: 0
        };
        this.modal = this.modal.bind(this);
        this.handleDifficultyClick = this.handleDifficultyClick.bind(this);
        this.handleRatingClick = this.handleRatingClick.bind(this);
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    handleFilterClick(filterType) {
        // show modal with appropriate filters loaded
        return
    }

    modal(type) {
        switch(type) {
            case "difficulty":
                return this.difficulty();
            case "length":
                return this.length();
            case "gain":
                return this.gain();
            case "time":
                return this.time();
            case "category":
                return this.category();
            case "rating":
                return this.rating();
        }
    }

    handleDifficultyClick(e) {
        let difficulty = Object.assign({}, this.state.difficulty);
        difficulty[e.currentTarget.value] = !this.state.difficulty[e.currentTarget.value];
        this.setState({ difficulty: difficulty });
    }

    difficulty() {
        return (
            <form>
                <input onClick={this.handleDifficultyClick} type="checkbox" value="easy" />
                <label>Easy</label>
                <input onClick={this.handleDifficultyClick} type="checkbox" value="moderate" />
                <label>Moderate</label>
                <input onClick={this.handleDifficultyClick} type="checkbox" value="hard" />
                <label>Hard</label>
            </form>
        );
    }

    updateLength(field) {
        return (
            e => {
                let length = Object.assign({}, this.state.length);
                length[field] = e.currentTarget.value;
                this.setState({ length: length })
            }
        );
    }

    length() {
        return (
            <form>
                <label>Min: </label>
                <input onChange={this.updateLength("min")} type="text" placeholder="min miles" value={this.state.length.min} />           
                <label>Max: </label>             
                <input onChange={this.updateLength("max")} type="text" placeholder="max miles" value={this.state.length.max} />                        
            </form>
        );
    }

    gain() {
        return (
            <form>
                <label>Min: </label>
                <input type="text" placeholder="min ft" />           
                <label>Max: </label>             
                <input type="text" placeholder="max ft" />                        
            </form>
        );
    }

    time() {
        return (
            <form>
                <label>Min: </label>
                <input type="text" placeholder="hours" />           
                <input type="text" placeholder="minutes" />   
                <label>Max: </label>         
                <input type="text" placeholder="hours" />               
                <input type="text" placeholder="minutes" />                        
            </form>
        );
    }

    category() {
        return (
            <form>
                <input type="checkbox" value="loop" />
                <label>Loop</label>
                <input type="checkbox" value="out and back" />
                <label>Out and Back</label>
                <input type="checkbox" value="point to point" />
                <label>Point to Point</label>
            </form>
        );
    }

    handleRatingClick(e) {
        let rating = parseInt(e.currentTarget.name);
        let stars = document.getElementsByClassName("star");

        for(let i = 0; i < 5; i++) {
            stars[i].setAttribute("src", "images/GreyRatingStar.png")
        }

        if(rating === this.state.rating) {
            this.setState(() => ({ rating: 0 }));
        } else {
            this.setState(() => ({ rating: rating }));
            for(let i = 0; i < 5; i++) {
                if(parseInt(stars[i].name) <= rating) {
                    stars[i].setAttribute("src", "images/YellowRatingStar.png");
                }
            }
        }
    }

    rating() {
        return (
            <div>
                <img className="star" name="1" src="images/GreyRatingStar.png" alt="Star" onClick={this.handleRatingClick} />
                <img className="star" name="2" src="images/GreyRatingStar.png" alt="Star" onClick={this.handleRatingClick} />
                <img className="star" name="3" src="images/GreyRatingStar.png" alt="Star" onClick={this.handleRatingClick} />
                <img className="star" name="4" src="images/GreyRatingStar.png" alt="Star" onClick={this.handleRatingClick} />
                <img className="star" name="5" src="images/GreyRatingStar.png" alt="Star" onClick={this.handleRatingClick} />
            </div>
        );
    }


    render() {
        console.log(this.state.length);
        return (
            <div>
                {/* import search bar from home page HERE */}
                <div>
                    <button onClick={() => this.handleFilterClick("difficulty")} >Difficulty</button>
                    {this.modal("difficulty")}
                </div>
                <div>
                    <button onClick={() => this.handleFilterClick("length")} >Length</button>
                    {this.modal("length")}
                </div>
                <div>
                    <button onClick={() => this.handleFilterClick("gain")} >Gain</button>
                    {this.modal("gain")}
                </div>
                <div>
                    <button onClick={() => this.handleFilterClick("time")} >Time</button>
                    {this.modal("time")}
                </div>
                <div>
                    <button onClick={() => this.handleFilterClick("category")} >Category</button>
                    {this.modal("category")}
                </div>
                <div>
                    <button onClick={() => this.handleFilterClick("rating")} >Rating</button>
                    {this.modal("rating")}
                </div>
            </div>
        );
    }
}

export default SearchFilterBar;