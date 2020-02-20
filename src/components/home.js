import React, { useState } from "react";
import RegForm from "./registration";
import SignUp from "./signIn";

const Home = () => {
  const [started, setGetStarted] = useState("welcome");

  return (
    <div className="jumbotron">
      <div className="row mt-4">
        {started === "welcome" ? (
          <div className="col-md-10" style={{ backgroundColor: "#efe9e99e" }}>
            <div className="m-4">
              <h3 className="display-4">Welcome</h3>
              <h1 className="display-4">California Online Farmers Market</h1>
              <p className="lead">
                We connect people, who are seraching for fresh garden to table
                produce, to local farmers in their areas.
              </p>
              <hr className="my-4" />
              <p>
                Get to know farmers in your local area, find out what they grew
                and custimize your very own produce box.
              </p>
              <p className="lead">
                <a
                  className="btn buttonGreen btn-lg"
                  href="#"
                  role="button"
                  onClick={() => {
                    setGetStarted("start");
                  }}
                >
                  Get Started
                </a>

                <a
                  className="btn button btn-lg ml-2"
                  href="#"
                  role="button"
                  onClick={() => setGetStarted("signIn")}
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        ) : started === "start" ? (
          <RegForm />
        ) : (
          <SignUp />
        )}
      </div>
    </div>
  );
};

export default Home;
