import React, { Component } from "react";
import "./force-credentails.scss";

const ForceCredentials = (props) => {
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
          <div className="col-md-7">
						<div className="row">
							<div className="col-md-12" id="getStartedWrapper">
								<h5>Get started by creating a new room</h5>
								<p>NickName</p>
								<input type="text" className="custom-input" placeholder="Nickname"/>
							</div>
						</div>
					</div>
        </div>
      </div>
    </div>
  );
};

export default ForceCredentials;
