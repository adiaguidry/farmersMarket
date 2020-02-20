import { CONSTANTS } from ".";
import axios from "axios";

export const saveUser = account => {
  return {
    type: CONSTANTS.ADD_USER,
    payload: account
  };
};

export const getUser = userEmail => {
  return {
    type: CONSTANTS.FETCH_USER,
    payload: userEmail
  };
};

export const order = order => {
  return {
    type: CONSTANTS.COMPLETE_ORDER,
    payload: order
  };
};

export const completeOrder = (account, order) => {
  console.log(account, order, "in the reducer");

  return dispatch => {
    return axios
      .put(`/api/usersdb/order/${account}`, JSON.stringify(order))
      .then(response => {
        console.log(response, "response from call");
        dispatch(order(order));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const signIn = account => {
  return {
    type: CONSTANTS.SIGNIN,
    payload: account
  };
};

export const signInUser = account => {
  return dispatch => {
    return axios
      .post("/api/usersdb/signin", account)
      .then(response => {
        dispatch(signIn(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const register = account => {
  return {
    type: CONSTANTS.REG_USER,
    payload: account
  };
};

export const registerUser = account => {
  return dispatch => {
    return axios
      .post("/api/usersdb/register", account)
      .then(response => {
        dispatch(register(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
