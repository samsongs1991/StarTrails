import React from "react";

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.user();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    user () {
        let defaultUser = Object.assign({}, this.props.user);
        for(let key in defaultUser) {
            if(defaultUser[key] === null) {
                defaultUser[key] = "";
            }
        }
        return defaultUser;
    }

    update(field) {
        return (
            e => this.setState({ [field]: e.currentTarget.value })
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        const userInput = Object.assign({}, this.state);
        return (
            this.props.updateUser(userInput)
        );
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h3>Edit Profile</h3>
                <div>
                    <img src="" alt="Profile picture" />
                    <form onSubmit={this.handleSubmit} >
                        <label>First name</label>
                        <input onChange={this.update("firstName")} type="text" value={this.state.firstName} />

                        <label>Last name</label>
                        <input onChange={this.update("lastName")} type="text" value={this.state.lastName} />

                        <label>Email</label>
                        <input onChange={this.update("email")} type="text" value={this.state.email} />
                        
                        <label>About Me</label>
                        <input onChange={this.update("aboutMe")} type="text" value={this.state.aboutMe} />
                        
                        <label>City</label>
                        <input onChange={this.update("city")} type="text" value={this.state.city} />
                        
                        <label>State</label>
                        <input onChange={this.update("state")} type="text" value={this.state.state} />
                        
                        <label>Gender</label>
                        <input onChange={this.update("gender")} type="text" value={this.state.gender} />
                        
                        <label>Birthday</label>
                        <input onChange={this.update("bday")} type="date" value={this.state.bday} />

                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Settings;