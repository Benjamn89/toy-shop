const initialState = {
  login: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "loginSucess") {
    return {
      login: !state.login,
    };
  }
  return state;
};

export default reducer;
