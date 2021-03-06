const initialState = {
  login: false,
  view: "About",
};

const reducer = (state = initialState, action) => {
  if (action.type === "loginSucess") {
    return {
      ...state,
      view: "About",
      login: !state.login,
    };
  }
  if (action.type === "changeView") {
    return {
      ...state,
      view: action.val,
    };
  }
  return state;
};

export default reducer;
