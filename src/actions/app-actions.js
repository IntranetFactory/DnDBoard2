export const setType = ({ key, value, item }) => dispatch => {
  dispatch({
    type: "SET_TYPE",
    payload: { key, value, item }
  });
};

export const setTitle = ({ key, value, item }) => dispatch => {
  dispatch({
    type: "SET_TITLE",
    payload: { key, value, item }
  });
};

export const setData = ({ key, value, item }) => dispatch => {
  dispatch({
    type: "SET_DATA",
    payload: { key, value, item }
  });
};

export const setLayout = (layout, root) => (dispatch, getState) => {
  dispatch({
    type: "SET_LAYOUT",
    payload: { layout, root, breakpoint: getState().breakpoint }
  });
};

export const setBreakPoint = breakpoint => dispatch => {
  dispatch({
    type: "SET_BREAKPOINT",
    payload: breakpoint
  });
};
