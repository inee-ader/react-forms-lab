import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" />
      <p>Characters remaining: {(this.props.maxChars)-(this.state.value.length)}</p>
      </div>
    );
  }
}

export default TwitterMessage;
