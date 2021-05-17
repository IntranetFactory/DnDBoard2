import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import AceEditor from "react-ace";

import "brace/mode/json";
import "brace/theme/monokai";

import { setLayout } from "../actions/app-actions";

class LayoutEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: JSON.stringify(props.value, null, "\t")
    };
  }

  handleSubmit = () => {
    const { value } = this.state;
    try {
      this.props.setLayout(JSON.parse(value), this.props.root);
      this.hideModal();
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = value => {
    this.setState({ value });
  };

  hideModal = () => {
    this.props.history.push("/");
  };

  render() {
    const { value } = this.state;
    return (
      <Modal show onHide={this.hideModal} bsSize="sm">
        <Modal.Header closeButton>Edit Layout Properties</Modal.Header>
        <Modal.Body>
          <AceEditor
            mode="json"
            theme="monokai"
            name="layouteditor"
            width="298px"
            height="200px"
            wrapEnabled
            onChange={this.handleChange}
            fontSize={14}
            showPrintMargin={true}
            showGutter={false}
            highlightActiveLine={true}
            value={value}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button bstype="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state, { match: { params: { id } } }) => {
  const value = state.layouts[state.breakpoint].find(({ i }) => i === id) || {};
  return {
    root: id,
    value
  };
};

export default connect(mapStateToProps, { setLayout })(LayoutEditor);
