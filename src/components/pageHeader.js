import React from "react";

const PageHeader = () => {
  return (
    <div className="row ">
      <div
        className="col-md-12 text-center divider"
        style={styles.pageheadstyle}
      >
        <h2>Find Local Farmers in Your Area</h2>
        <p>Scan the map or scroll on the right</p>
      </div>
    </div>
  );
};

const styles = {
  pageheadstyle: {
    height: "8rem",

    padding: "15rem"
  }
};

export default PageHeader;
