import React, { useEffect, useState } from "react";
import WorkList from "./WorkList";
import { useSelector, useDispatch } from "react-redux";
import * as createAction from "../actions/listActions";
import * as createOrderAction from "../actions/customerActions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions/listActions";
import Modal from "@material-ui/core/Modal";

function DND() {
  //handle modal for box info
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
    if (lists[1].cards.length === 5 && destination.droppableId === "1")
      handleOpen();

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
        <h1 onClick={handleOpen}>Create Your Produce Box </h1>
        {selectedFarm ? (
          <h2>
            From: <img width="5%" src={selectedFarm.img} alt="" />
            {selectedFarm.name}
          </h2>
        ) : (
          <h4>Start with picking a farmer. Head to the Farmers link above.</h4>
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
      <Modal
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        open={open}
        onClose={handleClose}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="farmerModalLabel">
                Items in Your Box
              </h5>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div>
                    <p className="lead">
                      To ensure we have enough produce for each box we limit box
                      items to 5 selections. You can drag cards out of your box
                      to select something different.
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
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
