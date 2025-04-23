import { createStore } from "redux";

// Initial state
const initialState = {
  tasks: [],
};

// Reducer
function taskReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task, idx) => idx !== action.payload),
      };
    default:
      return state;
  }
}

// Store
const store = createStore(taskReducer);

export default store;
