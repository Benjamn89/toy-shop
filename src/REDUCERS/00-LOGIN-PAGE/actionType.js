const actionTypes = {
  loginSucess: () => {
    return {
      type: "loginSucess",
    };
  },
  changeView: (section) => {
    return {
      type: "changeView",
      val: section,
    };
  },
};

export default actionTypes;
