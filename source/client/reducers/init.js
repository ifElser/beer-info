const reducers = {
  SET_STATE: state => state
};

const init = (state = {}, action) => (reducers[action] || (state => state))(state);

export default init;
