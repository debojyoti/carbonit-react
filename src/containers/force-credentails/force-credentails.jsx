import React, { useEffect, useState } from "react";
import "./force-credentails.scss";

const ForceCredentials = (props) => {
  const [currentView, updateCurrentView] = useState({
    modeName: "decisonMaking",
  });

  const _renderView = () => {
    switch (currentView.modeName) {
      case "deviceNameInput": {
        return (
          <div className="row">
            <div className="col-md-12" id="getStartedWrapper">
              <h5>Hey, name your device to get started</h5>
              <div className="custom-input-group">
                <p>Device name</p>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Eg: John-Dell-Laptop"
                />
              </div>
              <div className="buttonWrapper">
                <button className="custom-button">Get Started &nbsp; <i className="fas fa-arrow-right"></i></button>
                {/* <div className="loader"></div> */}
              </div>
            </div>
          </div>
        );
			}
			case "decisonMaking": {
        return (
          <div className="row">
            <div className="col-md-12" id="getStartedWrapper">
              <h5>Hey, name your device to get started</h5>
              <div className="custom-input-group">
                <p>Device name</p>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Eg: John-Dell-Laptop"
                />
              </div>
              <div className="buttonWrapper">
                <button className="custom-button">Get Started &nbsp; <i className="fas fa-arrow-right"></i></button>
                {/* <div className="loader"></div> */}
              </div>
            </div>
          </div>
        );
      }
      default: {
        return <div />;
      }
    }
  };

  return (
    <div id="forceCredentialsWrapper">
      <div className="container" id="forceCredentialsInnerWrapper">
        <div className="row">
          <div className="col-md-5 brandWrapper">
            <h2>
              <i className="fas fa-clone"></i> &nbsp;Carbon IT
            </h2>
            <h5>
              Free cloud&nbsp;<i className="fas fa-clipboard"></i>
              &nbsp;clipboard
            </h5>
            <p>
              Share&nbsp; <i className="fas fa-file-image"></i> files,{" "}
              <i className="fas fa-file-alt"></i> texts <strong>&</strong>{" "}
              <i class="fas fa-code"></i> codes across devices
            </p>
          </div>
          <div className="col-md-7">{_renderView()}</div>
        </div>
      </div>
    </div>
  );
};

export default ForceCredentials;
