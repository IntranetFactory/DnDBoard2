import React, { Component } from "react";
import { connect } from "react-redux";
import { DropdownButton, MenuItem } from "react-bootstrap";
import debounce from "lodash.debounce";

import InputField from "./InputField";
import DataEdit from "./DataEdit";

import { setType, setTitle } from "../actions/app-actions";

import graphTypes from "../constants/graph-types";

class EditDetail extends Component {
  constructor(props) {
    super(props);
    this.debouncedChange = debounce(this.handleChange, 300);
  }

  handleChange = value => {
    const { root, setTitle } = this.props;

    setTitle({ key: root, value, item: "title" });
  };

  handleSelect = value => {
    const { root, setType } = this.props;

    setType({ key: root, value, item: "type" });
  };

  render() {
    const { title, type, data, root } = this.props;
    return (
      <div className="detail__edit">
        <label>Title</label>
        <InputField value={title} onChange={this.handleChange} />
        <label>Type</label>
        <DropdownButton
          title={type}
          id="type-change-dropdown"
          onSelect={this.handleSelect}
        >
          {graphTypes.map(({ label, value }) => (
            <MenuItem key={value} eventKey={value}>
              {label}
            </MenuItem>
          ))}
        </DropdownButton>
        <label>Data</label>
        <DataEdit root={root} value={JSON.stringify(data, null, "\t")} />
      </div>
    );
  }
}

export default connect(null, { setTitle, setType })(EditDetail);
