import { LOGIN_SUCCES, LOGIN_FAILURE,LOGOUT } from "./action";

const initState = {
  isAuth: false,
  token: "",
};
// QpwL5tke4Pnpja7X4
// eve.holt@reqres.in
// cityslicka


export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCES: {
      return {
        ...state,
        isAuth: true,
        token: payload,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: "",
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isAuth: false,
        token: "",
      };
    }
    default:
      return state;
  }
};
