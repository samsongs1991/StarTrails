import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "", 
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
    }

    componentWillUnmount() {
        this.props.clear();
    }

    update(field) {
        return (
            e => {
                this.props.clear();
                return (
                    this.setState({
                        [field]: e.currentTarget.value, 
                    })
                ); 
            }
            
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

    loginDemo() {
        const demoUser = { email: "demo@gmail.com", password: "123456" }
        this.props.processForm(demoUser);
    }

    render() {
        return (
            <div className="session-form">
                <h3>{this.sessionFormMessage()}</h3>
                <form onSubmit={this.handleSubmit} >
                    <input onChange={this.update("email")} value={this.state.email} type="email" placeholder="Email" />
                    <div>{this.props.errors.email}</div>
                
                    <input onChange={this.update("password")} value={this.state.password} type="password" placeholder="Password" />
                    <div>{this.props.errors.password}</div>

                    <div>{this.props.errors.signin}</div> 
                    
                    <button type="submit">{this.buttonText()}</button>
                </form>
                <button onClick={this.loginDemo} >Demo User Log In</button>
                {this.props.navLink}
            </div>
        );
    }

}

export default SessionForm;