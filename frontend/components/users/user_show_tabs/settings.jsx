import React from "react";

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.user()
        }
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
            e => this.setState({ user: Object.assign({}, this.state.user, { [field]: e.currentTarget.value }) })
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        const userInput = Object.assign({}, this.state);
        this.props.history.push(`/users/${this.props.user.id}`);
        return (
            this.props.updateUser(userInput)
        );
    }

    render() {
        return (
            <div>
                <h3>Edit Profile</h3>
                <div>
                    <img src="" alt="Profile picture" />
                    <form onSubmit={this.handleSubmit} >
                        <label>First name</label>
                        <input onChange={this.update("first_name")} type="text" value={this.state.user.first_name} />

                        <label>Last name</label>
                        <input onChange={this.update("last_name")} type="text" value={this.state.user.last_name} />

                        <label>Email</label>
                        <input onChange={this.update("email")} type="text" value={this.state.user.email} />
                        
                        <label>About Me</label>
                        <input onChange={this.update("about_me")} type="text" value={this.state.user.about_me} />
                        
                        <label>City</label>
                        <input onChange={this.update("city")} type="text" value={this.state.user.city} />
                        
                        <label>State</label>
                        <input onChange={this.update("state")} type="text" value={this.state.user.state} />
                        
                        <label>Gender</label>
                        <input onChange={this.update("gender")} type="text" value={this.state.user.gender} />
                        
                        <label>Birthday</label>
                        <input onChange={this.update("bday")} type="date" value={this.state.user.bday} />

                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Settings;