import React from "react";
import "./FooterComponent.css";

export default App;

function Frame3(props) {
  const { ifYoureADegen, goodLuck, followTwitter, joinDiscord } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-3 screen">
        <div className="overlap-group2">
          <div className="flex-col">
            <h1 className="if-youre-a-degen">{ifYoureADegen}</h1>
            <div className="good-luck">{goodLuck}</div>
            <div className="overlap-group-container">
              <div className="overlap-groupborder-1px-white">
                <img className="vector" src="vector.svg" />
                <div className="follow-twitter poppins-semi-bold-white-14px">
                  {followTwitter}
                </div>
              </div>
              <div className="overlap-group1 border-1 px-white">
                <img className="vector-1" src="vector-1.svg" />
                <div className="join-discordpoppins-semi-bold-white-14px">
                  {joinDiscord}
                </div>
              </div>
            </div>
          </div>
          <img className="group" src="group.svg" />
        </div>
      </div>
    </div>
  );
}
