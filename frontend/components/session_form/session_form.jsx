import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "", 
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return(
            e => this.setState({
                [field]: e.currentTarget.value, 
            })
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        const userInput = Object.assign({}, this.state);
        return (
            this.props.processForm(userInput)
        );
    }

    sessionFormMessage() {
        let message;
        if(this.props.formType === "signup") {
            message = "Create your free account"
        } else if(this.props.formType === "signin") {
            message = "Log in and let's get going"
        }
        return message;
    }

    buttonText() {
        let text;
        if(this.props.formType === "signup") {
            text = "Sign Up"
        } else if(this.props.formType === "signin") {
            text = "Log In"
        }
        return text;
    }

    renderEmailError() {
        const { errors } = this.props;
        if (errors.email) {
            return (<div>{errors.email}</div>);
        }
    }

    renderPasswordError() {
        const { errors } = this.props;
        if (errors.password) {
            return (<div>{errors.password}</div>);
        }
    }

    render() {
        return (
            <div>
                <h3>{this.sessionFormMessage()}</h3>
                <form onSubmit={this.handleSubmit} >
                    <input onChange={this.update("email")} value={this.state.email} type="text" />
                    {this.renderEmailError()}
                    <input onChange={this.update("password")} value={this.state.password} type="password" />
                    {this.renderPasswordError()}
                    <button>{this.buttonText()}</button>
                </form>
                {this.props.navLink}
            </div>
        );
    }

}

export default SessionForm;