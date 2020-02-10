import React, { useEffect } from "react";
import WorkCard from "./WorkCard";
import { Droppable, Draggable } from "react-beautiful-dnd";

const WorkList = ({ listID, title, cards, index }) => {
  return (
    <div>
      <div style={styles.container}>
        <Droppable droppableId={String(listID)}>
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <h4>{title}</h4>
              {cards.map((card, index) => (
                <WorkCard
                  key={card.id}
                  text={card.text}
                  id={card.id}
                  index={index}
                />
              ))}

              {provided.placeholder}
              <small> Drag and Drop to move items</small>
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f4cf49",
    // height: "100%",
    borderRadius: 5,
    width: 300,
    padding: 3,
    marginRight: 8
  }
};
export default WorkList;
