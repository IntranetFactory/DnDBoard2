import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import GridItem from "../components/GridItem";

const GridItemContainer = ({ title, type, data, children, item, ...props }) => {
  return (
    <GridItem title={title} type={type} data={data} root={item} {...props}>
      {children}
    </GridItem>
  );
};

GridItemContainer.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  children: PropTypes.array
};

const mapStateToProps = (state, { item }) => state.data[item];

export default connect(mapStateToProps)(GridItemContainer);
