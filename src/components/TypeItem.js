import React, { Component } from "react";
import PropTypes from "prop-types";

class TypeItem extends Component {
  handleClick = () => {
    const { onClick, value } = this.props;

    onClick(value);
  };
  render() {
    const { type, label, value } = this.props;
    return (
      <div
        className={`type-item ${value === type ? "selected" : ""}`}
        onClick={this.handleClick}
      >
        {label}
      </div>
    );
  }
}

TypeItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default TypeItem;
