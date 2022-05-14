import {
  TODO_LOADING,
  TODO_SUCCESS,
  TODO_FAILURE,
  FILTER_TODO,
} from "./action";

const initState = {
  todo: [],
  loading: false,
  failure: false,
  success: false,
};

export const reducertodo = (state = initState, { type, payload }) => {
  switch (type) {
    case TODO_LOADING: {
      return {
        ...state,
        loading: true,
        failure: false,
        success: false,
        todo: [],
      };
    }
    case TODO_SUCCESS: {
        console.log("payload", payload);
      return {
        ...state,
        loading: false,
        failure: false,
        success: true,
        todo: [...state.todo,payload],
      };
    }
    case TODO_FAILURE: {
      return {
        ...state,
        loading: false,
        failure: true,
        success: false,
        todo: [],
      };
    }
    case FILTER_TODO: {
      return {
        ...state,
        todo:state.todo.filter((item) => item.todostatus === payload),
      };
    }
    default:
      return state;
  }
};
