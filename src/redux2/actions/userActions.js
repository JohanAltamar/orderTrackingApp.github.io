import types from "../types";

export const setUserInfoAction = (payload) => ({
  type: types.USER__SET_INFO,
  payload,
});

export const resetUserInfoAction = () => ({
  type: types.USER__RESET_INFO,
});