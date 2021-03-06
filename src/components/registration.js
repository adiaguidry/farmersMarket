import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import Input from "./input";
import { useDispatch, useSelector } from "react-redux";
import * as customerAction from "../actions/customerActions";
import * as userAction from "../actions/userActions";
import Banner from "./banner";

const RegForm = () => {
  const [success, setSuccess] = useState(false);
  const customer = useSelector(state => state.customer);
  const [account, setAccount] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState({});
  useEffect(
    () => {
      console.log(customer);
    },
    [error],
    [customer]
  );

  const schema = {
    firstName: Joi.string()
      .min(2)
      .max(15)
      .required()
      .label("First Name"),
    lastName: Joi.string()
      .min(2)
      .max(15)
      .required()
      .label("Last Name"),
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(6)
      .max(15)
      .label("Password")
  };
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const newAccount = { ...account };
    newAccount[target.name] = target.value;
    setAccount(newAccount);
    const results = validateProperty(target.name, target.value);
    let e = {};
    if (results.error)
      e = {
        [results.error.details[0].path]: results.error.details[0].message
      };
    setError(e);
  };

  const validateProperty = (name, value) => {
    const obj = {
      [name]: value
    };
    const propSchema = { [name]: schema[name] };
    return Joi.validate(obj, propSchema);
  };

  const validateForm = () => {
    const { error: e } = Joi.validate(account, schema);
    const allErorr = {};
    if (e)
      e.details.map(e => {
        allErorr[e.path] = e.message;
      });
    return allErorr;
  };

  const storeData = () => {
    dispatch(userAction.registerUser(account));
    setSuccess(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const result = validateForm();

    Object.keys(result).length === 0 ? storeData() : setError(result);
  };

  return (
    <div className="col-md-10 m-4">
      <div className="m-4">
        {!success ? (
          <form
            onSubmit={handleSubmit}
            style={{ backgroundColor: "#efe9e99e" }}
          >
            <div className="form-row">
              <Input
                name="firstName"
                label="First Name"
                type="text"
                value={account.firstName}
                errorName={error.firstName}
                handleChange={handleChange}
              />
              <Input
                name="lastName"
                label="Last Name"
                type="text"
                value={account.lastName}
                errorName={error.lastName}
                handleChange={handleChange}
              />
              <Input
                name="email"
                label="Email"
                type="text"
                value={account.email}
                errorName={error.email}
                handleChange={handleChange}
              />
              <Input
                name="password"
                label="Password"
                type="password"
                value={account.password}
                errorName={error.password}
                handleChange={handleChange}
              />
            </div>

            <button type="submit" className="btn button">
              Register
            </button>
          </form>
        ) : (
          <Banner
            text={
              "Welcome, lets get you going! Head over to checkout your local farmers."
            }
          />
        )}
      </div>
    </div>
  );
};

export default RegForm;
