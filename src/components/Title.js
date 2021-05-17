import React, { Component } from "react";
import PropTypes from "prop-types";
import { DropdownButton, Panel, MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import TypeItem from "./TypeItem";

import { setType } from "../actions/app-actions";

import graphTypes from "../constants/graph-types";

class Title extends Component {
  handleClick = value => {
    const { root } = this.props;

    this.props.setType({ key: root, value, item: "type" });
  };

  render() {
    const { title, type, root } = this.props;
    return (
      <DropdownButton id="title-dropdown" title={title}>
        <li>
          <Link to={`/${root}/view`}>View</Link>
        </li>
        <li>
          <Link to={`/${root}/layout`}>Layout</Link>
        </li>
        <li>
          <Link to={`/${root}/edit`}>Edit</Link>
        </li>
        <MenuItem>
          <Panel id="collapsible-type-panel" defaultExpanded>
            <Panel.Heading>
              <Panel.Title toggle>Type</Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                {graphTypes.map(({ label, value }) => {
                  return (
                    <TypeItem
                      key={value}
                      onClick={this.handleClick}
                      type={type}
                      value={value}
                      label={label}
                    />
                  );
                })}
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </MenuItem>
      </DropdownButton>
    );
  }
}

Title.propTypes = {
  root: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default connect(null, { setType })(Title);
