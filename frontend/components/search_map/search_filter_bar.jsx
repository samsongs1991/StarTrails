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
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
        this.handleRatingClick = this.handleRatingClick.bind(this);
        this.handleRatingHover = this.handleRatingHover.bind(this);
        this.handleRatingOff = this.handleRatingOff.bind(this);
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }
    // ----------------------------------------------
    handleFilterClick(filterType) {
        // show modal with appropriate filters loaded
        // implement by doing a setAttribute method to show vs hide
        // can hide/show using the class in css
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
    // ----------------------------------------------
    handleDifficultyClick(e) {
        let difficulty = Object.assign({}, this.state.difficulty);
        difficulty[e.currentTarget.value] = !this.state.difficulty[e.currentTarget.value];
        this.setState({ difficulty: difficulty });
    }

    difficulty() {
        return (
            <div>
                <input onClick={this.handleDifficultyClick} type="checkbox" value="easy" />
                <label>Easy</label>
                <input onClick={this.handleDifficultyClick} type="checkbox" value="moderate" />
                <label>Moderate</label>
                <input onClick={this.handleDifficultyClick} type="checkbox" value="hard" />
                <label>Hard</label>
            </div>
        );
    }
    // ----------------------------------------------
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
            <div>
                <label>Min: </label>
                <input onChange={this.updateLength("min")} type="text" placeholder="min miles" value={this.state.length.min} />           
                <label>Max: </label>             
                <input onChange={this.updateLength("max")} type="text" placeholder="max miles" value={this.state.length.max} />                        
            </div>
        );
    }
    // ----------------------------------------------
    updateGain(field) {
        return (
            e => {
                let gain = Object.assign({}, this.state.gain);
                gain[field] = e.currentTarget.value;
                this.setState({ gain: gain })
            }
        );
    }

    gain() {
        return (
            <div>
                <label>Min: </label>
                <input onChange={this.updateGain("min")} type="text" placeholder="min ft" />           
                <label>Max: </label>             
                <input onChange={this.updateGain("max")}type="text" placeholder="max ft" />                        
            </div>
        );
    }
    // ----------------------------------------------
    updateTime(field1, field2) {
        return (
            e => {
                let time = Object.assign({}, this.state.time);
                time[field1][field2] = e.currentTarget.value;
                this.setState({ time: time })
            }
        );  
    }
    
    time() {
        return (
            <div>
                <label>Min: </label>
                <input onChange={this.updateTime("min", "hrs")} type="text" placeholder="hours" />           
                <input onChange={this.updateTime("min", "mins")} type="text" placeholder="minutes" />   
                <label>Max: </label>         
                <input onChange={this.updateTime("max", "hrs")} type="text" placeholder="hours" />               
                <input onChange={this.updateTime("max", "mins")} type="text" placeholder="minutes" />                        
            </div>
        );
    }
    // ----------------------------------------------
    handleCategoryClick(e) {
        let category = Object.assign({}, this.state.category);
        category[e.currentTarget.value] = !this.state.category[e.currentTarget.value];
        this.setState({ category: category });
    }
    
    category() {
        return (
            <div>
                <input onClick={this.handleCategoryClick} type="checkbox" value="loop" />
                <label>Loop</label>
                <input onClick={this.handleCategoryClick} type="checkbox" value="outAndBack" />
                <label>Out and Back</label>
                <input onClick={this.handleCategoryClick} type="checkbox" value="pointToPoint" />
                <label>Point to Point</label>
            </div>
        );
    }
    // ----------------------------------------------
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

    handleRatingHover(e) {
        let rating = parseInt(e.currentTarget.name);
        let stars = document.getElementsByClassName("star");

        for(let i = 0; i < 5; i++) {
            stars[i].setAttribute("src", "images/GreyRatingStar.png")
        }

        for(let i = 0; i < 5; i++) {
            if(i < rating) {
                stars[i].setAttribute("src", "images/YellowRatingStar.png");
            }
        }
    }

    handleRatingOff(e) {
        let stars = document.getElementsByClassName("star");

        for(let i = 0; i < 5; i++) {
            if(i < this.state.rating) {
                stars[i].setAttribute("src", "images/YellowRatingStar.png")
            } else {
                stars[i].setAttribute("src", "images/GreyRatingStar.png")
            }
        }
    }

    rating() {
        return (
            <div>
                <img className="star" name="1" src="images/GreyRatingStar.png" alt="Star" onClick={this.handleRatingClick} onMouseEnter={this.handleRatingHover} onMouseLeave={this.handleRatingOff} />
                <img className="star" name="2" src="images/GreyRatingStar.png" alt="Star" onClick={this.handleRatingClick} onMouseEnter={this.handleRatingHover} onMouseLeave={this.handleRatingOff} />
                <img className="star" name="3" src="images/GreyRatingStar.png" alt="Star" onClick={this.handleRatingClick} onMouseEnter={this.handleRatingHover} onMouseLeave={this.handleRatingOff} />
                <img className="star" name="4" src="images/GreyRatingStar.png" alt="Star" onClick={this.handleRatingClick} onMouseEnter={this.handleRatingHover} onMouseLeave={this.handleRatingOff} />
                <img className="star" name="5" src="images/GreyRatingStar.png" alt="Star" onClick={this.handleRatingClick} onMouseEnter={this.handleRatingHover} onMouseLeave={this.handleRatingOff} />
            </div>
        );
    }
    // ----------------------------------------------
    render() {
        return (
            <div className="search-filter-bar" >
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
                <button onClick={() => this.props.updateFilters(Object.assign({}, this.props.filters, this.state)) } >Apply Filters</button>
            </div>
        );
    }
}

export default SearchFilterBar;