import React from "react";

const Input = ({ name, label, type, handleChange, value, errorName }) => {
  return (
    <div className="form-group col-md-6">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={errorName ? "form-control border-danger" : "form-control"}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={label}
      />
      <small className="text-danger font-weight-bold">{errorName}</small>
    </div>
  );
};

export default Input;
