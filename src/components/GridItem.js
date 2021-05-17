import React from "react";
import PropTypes from "prop-types";

import GraphBlock from "./GraphBlock";
import Title from "./Title";

const GridItem = ({
  title,
  data,
  type,
  className,
  style,
  dispatch,
  root,
  children,
  ...rest
}) => {
  const width = parseInt(style.width, 10);
  const height = parseInt(style.height, 10) - 50;
  return (
    <div className={`grid-item ${className}`} style={style} {...rest}>
      <div className="grid-item__title">
        <Title title={title} type={type} root={root} />
      </div>
      <div className="grid-item__graph">
        <GraphBlock type={type} data={data} width={width} height={height} />
      </div>
      {children}
    </div>
  );
};

GridItem.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  root: PropTypes.string.isRequired,
  children: PropTypes.array
};

export default GridItem;
