export const TODO_LOADING = "TODO_LOADING";
export const TODO_SUCCESS = "TODO_SUCCESS";
export const TODO_FAILURE = "TODO_FAILURE";
export const GET_TODO = "GET_TODO";
export const FILTER_TODO = "FILTER_TODO";

export const todoloading = () => {
  return {
    type: TODO_LOADING,
  };
};
export const todosuccess = (payload) => {
  return {
    type: TODO_SUCCESS,
    payload,
  };
};
export const todofailure = () => {
  return {
    type: TODO_FAILURE,
  };
};

export const fetchdata = async (dispatch) => {
  dispatch(todoloading());
  try {
    let res = await fetch(" http://localhost:8080/todo");
    let data = await res.json();
    dispatch(todosuccess(data));
  } catch (err) {
    dispatch(todofailure());
  }
};

export const gettodo = async (dispatch, payload) => {
  dispatch(todoloading());
  try {
    let res = await fetch(" http://localhost:8080/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    let data = await res.json();
    console.log("data", data);
    dispatch(todosuccess(data));
    fetchdata(dispatch);
  } catch (err) {
    dispatch(todofailure());
  }
};

export const filtertodo = (payload) => {
  return {
    type: FILTER_TODO,
    payload,
  };
};

export const filter = (dispatch, payload) => {
  dispatch(filtertodo(payload));
};
