const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          status: "pending"
        }
      ];
    case "REMOVE_TODO":
      return state;
    default:
      return state;
  }
};

export default todos;
