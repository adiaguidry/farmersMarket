import React, { useEffect } from "react";
import WorkList from "./WorkList";
import { useSelector, useDispatch } from "react-redux";
import * as createAction from "../actions/listActions";
import * as createOrderAction from "../actions/customerActions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions/listActions";

function DND() {
  const selectedFarm = useSelector(state => state.farms.selectedFarm);
  const lists = useSelector(state => state.lists);
  const dispatch = useDispatch();
  //add farmers produce to cards

  useEffect(() => {
    if (selectedFarm) dispatch(createAction.addCard(selectedFarm.produce));
  }, [selectedFarm]);

  const handleOrder = () => {
    dispatch(createOrderAction.completeOrder(lists[1].cards, selectedFarm));
    dispatch(createAction.removeCard());
  };

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  return (
    <React.Fragment>
      <div className="text-center">
        <h1>Create Your Produce Box </h1>
        {selectedFarm && (
          <h2>
            From: <img width="5%" src={selectedFarm.img} alt="" />
            {selectedFarm.name}
          </h2>
        )}

        <h6>
          Start by dragging and dropping items from the farm into your box
        </h6>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <div style={styles.listsContainer}>
                  {lists.map((list, index) => (
                    <WorkList
                      key={list.id}
                      listID={list.id}
                      title={list.title}
                      cards={list.cards}
                      index={index}
                    />
                  ))}

                  <button
                    className="btn buttonGreen mx-2"
                    onClick={handleOrder}
                    style={{
                      height: "2.3rem"
                    }}
                  >
                    Complete Order
                  </button>
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </React.Fragment>
  );
}
const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "3rem"
  }
};

export default DND;
