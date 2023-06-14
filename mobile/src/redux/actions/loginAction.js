import { useLoginMutation } from "../api/api";

export const onLogin = (payload) => {
  return async (dispatch) => {
    try {
      const { email, password } = payload;
      const mutation = useLoginMutation();
      const response = await mutation.mutateAsync({ email, password });

      if (response.user) {
        dispatch(loginSuccess(response.user));
      } else {
        dispatch(loginFailure("Invalid credentials"));
      }
    } catch (error) {
      dispatch(loginFailure("An error occurred"));
    }
  };
};

const loginSuccess = (userData) => ({
  type: "LOGIN_SUCCESS",
  payload: userData,
});

const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});
