import React, { Component } from "react";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  componentWillReceiveProps({ value }) {
    if (this.state.value !== value) {
      this.setState({ value });
    }
  }

  handleChange = e => {
    const { target: { value } } = e;
    this.setState(
      {
        value
      },
      this.handleFormUpdate
    );
  };

  handleFormUpdate = () => {
    const { onChange } = this.props;
    onChange(this.state.value);
  };

  handleKeyDown = e => {
    if (e.which === 13) {
      this.handleFormUpdate();
    }
  };

  render() {
    const { value } = this.state;
    return (
      <input
        value={value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

export default InputField;
