import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as createAction from "../actions/farmActions";
import Modal from "@material-ui/core/Modal";
import veggie from "../images/orange.svg";
import { A } from "hookrouter";
import afro from "../images/afro.png";
import red from "../images/red.png";
import burnett from "../images/burnett.png";
import hat from "../images/hat.png";
import beard from "../images/beard.png";
import blonde from "../images/blonde.png";

const FarmersList = ({ farm, produce }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(createAction.unselectFarmer());
  };

  const handleCreateBox = (e, farm) => {
    e.preventDefault();
    dispatch(createAction.selectFarmer(farm));
  };

  return (
    <React.Fragment>
      <div className="card my-2">
        <div className="card-body" onClick={handleOpen}>
          <div
            className="row"
            onClick={() => dispatch(createAction.selectFarmer(farm))}
          >
            <div className="col-md-2 col-sm-12">
              <img width="50%" src={veggie} alt="picture of farmers" />
            </div>
            <div className="col-md-2 col-sm-12">
              <h6>Name</h6>
              <p>{farm.name}</p>
            </div>
            <div className="col-md-2 col-sm-12">
              <h6>Location</h6>
              <p>{farm.location}</p>
            </div>
            <div className="col-md-6 col-sm-12">
              <h6>The Goods</h6>
              <ul className="produceList">
                {produce &&
                  produce.map(p => (
                    <li key={p.id} className="mx-1">
                      {p.text}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

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
                {farm.name}
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
                <div className="col-md-3">
                  <img src={farm.img} width="70%" alt="" />
                </div>
                <div className="col-md-8">
                  <div>
                    <p>Location: {farm.location}</p>
                  </div>
                  <div>
                    <div>
                      What we grow:
                      <ul className="produceList">
                        {produce &&
                          produce.map(p => (
                            <li key={p.id} className="mx-1">
                              {p.text}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
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
              <button type="button" className="btn button">
                <A
                  onClick={e => handleCreateBox(e, farm)}
                  href="/createbox"
                  style={{ textDecoration: "none", color: "#444" }}
                >
                  Create a Box
                </A>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default FarmersList;
