import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from "./action";

const initState = {
  loading: false,
  error: false,
  isAuthenticated: false,
  token: "",
  email: "",
};
export const loginReducer = (store=initState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...store, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...store,
        loading:false,
        error: false,
        isAuthenticated: true,
        token: payload.token,
        email: payload.email,
      };
      case LOGIN_FAILURE:
          return{
              ...store,
              error: true,
        isAuthenticated: false,
        token: "",
        email: "",
          }
      default:return store;
  }
};