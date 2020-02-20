import React, { useState, useEffect } from "react";
import Input from "./input";
import Joi from "joi-browser";
import { useDispatch, useSelector } from "react-redux";
import * as userAction from "../actions/userActions";
import Banner from "./banner";

const SignIn = () => {
  const [success, setSuccess] = useState(false);
  const [account, setAccount] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState({});

  const user = useSelector(state => state.users.currentUser);

  useEffect(() => {
    if (typeof user === "object" && Object.keys(user).length !== 0)
      setSuccess(true);
  }, [user]);
  const dispatch = useDispatch();
  // Joi schema validation
  const schema = {
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

  const validateProperty = (name, value) => {
    const obj = {
      [name]: value
    };
    const propSchema = { [name]: schema[name] };
    return Joi.validate(obj, propSchema);
  };

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

  const validateForm = () => {
    const { error: e } = Joi.validate(account, schema);
    const allErorr = {};
    if (e)
      e.details.map(e => {
        allErorr[e.path] = e.message;
      });
    return allErorr;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const result = validateForm();

    Object.keys(result).length === 0
      ? dispatch(
          userAction.signInUser({
            email: account.email,
            password: account.password
          })
        )
      : setError(result);
  };

  return (
    <div>
      {!success ? (
        <div style={{ backgroundColor: "#efe9e99e", marginTop: "4rem" }}>
          <form onSubmit={handleSubmit}>
            <h6 className="text-danger font-weight-bold">
              {typeof user === "string" ? user : " "}
            </h6>
            <div className="form-group mt-4">
              <Input
                name="email"
                label="Email Address"
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
            <button type="submit" className="btn button m-2">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <Banner
          text={`Welcome, ${user.firstName} lets get you going! Head over to checkout your local farmers.`}
        />
      )}
    </div>
  );
};

export default SignIn;
