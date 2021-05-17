import React from "react";
import { WidthProvider } from "react-grid-layout";

import GraphBlock from "./GraphBlock";

const DetailGraphBlock = ({ type, data, width }) => {
  return (
    <div className="detail__graph">
      <GraphBlock type={type} data={data} width={width} height={450} />
    </div>
  );
};

export default WidthProvider(DetailGraphBlock);
