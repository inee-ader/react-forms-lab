import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '', 
      password: ''
    };
  }

  handleInputChange = (e) => {
    // console.log(e.target.value)
    if(e.target.name == 'username'){
      this.setState({
        username: e.target.value
      })
    }if(e.target.name == 'password'){
      this.setState({
        password: e.target.value
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const username = this.state.username
    const password = this.state.password
    this.props.handleLogin({username, password})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div>
          <label>
            Username
            <input
              id="username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
