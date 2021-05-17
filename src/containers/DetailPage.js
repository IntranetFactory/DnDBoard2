import React from "react";
import { connect } from "react-redux";
import AceEditor from "react-ace";
import { Link } from "react-router-dom";

import "brace/mode/json";
import "brace/theme/monokai";

import DetailGraphBlock from "../components/DetailGraphBlock";

const DetailPage = ({ type, data, title }) => (
  <div className="detail-page">
    <DetailGraphBlock type={type} data={data} />
    <div className="detail-page__title">{title}</div>
    <Link className="go-back" to="/">
      X
    </Link>
    <div className="detail__info">
      <div>Title: {title}</div>
      <div>Type: {type}</div>
      <div>
        Data:
        <AceEditor
          mode="json"
          theme="monokai"
          name="layouteditor"
          width="100%"
          height="200px"
          wrapEnabled
          readOnly
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={JSON.stringify(data, null, "\t")}
        />
      </div>
    </div>
  </div>
);

const mapStateToProps = (state, { match: { params: { id } } }) =>
  state.data[id] || {};

export default connect(mapStateToProps)(DetailPage);
