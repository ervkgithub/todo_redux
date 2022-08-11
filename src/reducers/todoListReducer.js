const intialStateToDo = [
  {
    workName: "ToDo Item List",
  }
];

export default function (state = intialStateToDo, action) {
  switch (action.type) {
    case "ADD_TODO":
      state.unshift(action.payload);
      return [...state, action.payload];
    case "DELETE_TODO":
      state.splice(action.payload, 1);
      return [...state];
    default:
      return state;
  }
}
