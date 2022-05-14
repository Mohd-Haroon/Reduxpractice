export const LOGIN_SUCCES = "LOGIN_SUCCES";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT= "LOGOUT"

export const login = async (dispatch,{ email, password }) => {
  try {
    let res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    let data = await res.json();
    dispatch(loginSucces(data.token))

  } catch(err) {
    dispatch(loginFailure(err))
  }
  
};

export const loginFailure = (err) => {
  return {
    type: LOGIN_SUCCES,
    payload: err,
  };
};
export const loginSucces = (payload) => {
    return {
      type: LOGIN_SUCCES,
      payload,
    };
  };

  export const logOut = () => {
    return {
      type: LOGOUT,
      
    };
  };

