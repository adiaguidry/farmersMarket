import React from "react";

const SignIn = () => {
  return (
    <div
      className="offset-md-3 col-md-5"
      style={{ backgroundColor: "#efe9e99e", marginTop: "4rem" }}
    >
      <form>
        <div class="form-group  mt-4">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn button mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignIn;
