import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import TextareaAutosize from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import * as createAction from "../actions/listActions";

const ActionButton = ({ list, listID }) => {
  const dispatch = useDispatch();

  const buttonText = list === "list" ? "Add another Box" : "Add another card";
  const buttonTextOpacity = list === "list" ? 1 : 0.5;
  const buttonTextColor = list === "list" ? "white" : "inherit";
  const buttonTextBackground = list === "list" ? "rgba(0,0,0,.15)" : "inherit";

  const [formOpen, setFormOpen] = useState(false);
  const [formText, setformText] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setformText(input.value);
  };

  const handleAddElement = () => {
    list === "list"
      ? dispatch(createAction.addList(formText))
      : dispatch(createAction.addCard(formText, listID));
    setformText("");
  };

  const renderForm = () => {
    const placeholder =
      list === "list"
        ? "Enter list title..."
        : "Enter a title for this card...";
    const buttonTitle = list === "list" ? "Add List" : "Add Card";
    return (
      <div>
        <Card
          style={{
            minHeight: 60,
            minWidth: 272,
            padding: "6px, 8px, 2px",
            margin: 8
          }}
        >
          <TextareaAutosize
            placeholder={placeholder}
            autoFocus
            onBlur={() => setFormOpen(false)}
            value={formText}
            onChange={e => handleChange(e)}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none",
              overflow: "hidden"
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            onMouseDown={() => handleAddElement()}
            variant="contained"
            style={{
              color: "white",
              backgroundColor: "#444"
            }}
          >
            {buttonTitle}
          </Button>
          <Icon
            onClick={() => setFormOpen(false)}
            style={{
              cursor: "pointer",
              marginLeft: 8
            }}
          >
            close
          </Icon>
        </div>
      </div>
    );
  };

  return (
    <div>
      {formOpen ? (
        renderForm()
      ) : (
        <div
          onClick={() => setFormOpen(true)}
          style={{
            ...styles.buttonGroup,
            opacity: buttonTextOpacity,
            color: buttonTextColor,
            background: buttonTextBackground
          }}
        >
          <Icon>add</Icon>
          <p>{buttonText}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  buttonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  },
  formButtonGroup: {
    margin: 8,
    display: "flex",
    alignItems: "center"
  }
};

export default ActionButton;
