const initialState = [
  {
    id: 0,
    title: "Produce Available",
    cards: []
  },
  {
    id: 1,
    title: "Your Box",
    cards: []
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_CARD": {
      const newState = [...state];

      newState.find(list => {
        if (list.title === "Your Box") {
          list.cards = [];
        }
      });
      console.log(newState[1]);
      return newState;
    }
    case "ADD_CARD": {
      const newState = [...state];
      const newCards = action.payload;

      newState.find(list => {
        if (list.title === "Produce Available") {
          list.cards = newCards;
        } else {
          return list;
        }
      });

      return newState;
    }

    case "ADD_LIST":
      const newList = {
        id: Date.now(),
        title: action.payload,
        cards: []
      };
      return [...state, newList];

    case "DRAG_HAPPENED":
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type
      } = action.payload;
      const newState = [...state];
      //dragging list
      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }
      //same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => list.id === Number(droppableIdStart));

        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }
      // other list
      if (droppableIdStart !== droppableIdEnd) {
        //find list where drag happend
        const listStart = state.find(
          list => list.id === Number(droppableIdStart)
        );
        //pull card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        //find list where drag ended
        const listEnd = state.find(list => list.id === Number(droppableIdEnd));
        //put card in new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return newState;
    default:
      return state;
  }
};

export default listReducer;
