import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import DetailGraphBlock from "../components/DetailGraphBlock";
import EditDetail from "../components/EditDetail";

class EditPage extends Component {
  render() {
    const { type, data, title, root } = this.props;

    return (
      <div className="edit-page">
        <div className="edit-page__title">{title}</div>
        <Link className="go-back" to="/">
          X
        </Link>
        <DetailGraphBlock type={type} data={data} />
        <EditDetail title={title} data={data} type={type} root={root} />
      </div>
    );
  }
}

const mapStateToProps = (state, { match: { params: { id } } }) => {
  return {
    ...(state.data[id] || {}),
    root: id
  };
};

export default connect(mapStateToProps)(EditPage);
