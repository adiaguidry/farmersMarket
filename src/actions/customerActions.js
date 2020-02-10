import { CONSTANTS } from ".";

export const completeOrder = (order, farm) => {
  return {
    type: CONSTANTS.COMPLETE_ORDER,
    payload: { order: order, farm: farm }
  };
};

export const registration = account => {
  return {
    type: CONSTANTS.REGISTRATION,
    payload: account
  };
};
