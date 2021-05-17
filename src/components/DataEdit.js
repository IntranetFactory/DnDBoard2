import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import AceEditor from "react-ace";

import "brace/mode/json";
import "brace/theme/monokai";

import { setData } from "../actions/app-actions";

class DataEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      error: ""
    };
  }

  componentWillReceiveProps({ value }) {
    if (this.state.value !== value) {
      this.setState({ value });
    }
  }

  handleChange = value => {
    this.setState({
      value,
      error: ""
    });
    try {
      JSON.parse(value);
    } catch (error) {
      this.setState({
        error: error.message
      });
    }
  };

  updateStore = () => {
    const { value } = this.state;
    const { root, setData } = this.props;

    setData({ key: root, value: JSON.parse(value), item: "data" });
  };

  render() {
    const { value, error } = this.state;
    return (
      <div className="data-edit">
        <AceEditor
          mode="json"
          theme="monokai"
          name="layouteditor"
          width="100%"
          height="200px"
          wrapEnabled
          onChange={this.handleChange}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={value}
        />
        {error && <div className="data-edit__error">{error}</div>}
        <Button
          className=" data-edit__update"
          bstype="primary"
          onClick={this.updateStore}
        >
          Update
        </Button>
      </div>
    );
  }
}

export default connect(null, { setData })(DataEdit);
