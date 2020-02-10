import { CONSTANTS } from ".";

export const addList = title => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title
  };
};

export const addCard = produceList => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: produceList
  };
};

export const removeCard = () => {
  return {
    type: CONSTANTS.REMOVE_CARD
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type
    }
  };
};
