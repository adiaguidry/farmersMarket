import { CONSTANTS } from ".";
import axios from "axios";

export const completeOrder = (order, farm) => {
  return {
    type: CONSTANTS.COMPLETE_ORDER,
    payload: { order: order, farm: farm }
  };
};
