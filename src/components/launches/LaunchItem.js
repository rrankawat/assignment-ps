import React from "react";
import noimg from "./no-img.png";

const LaunchItem = ({ launch }) => {
  return (
    <div className="card">
      <img
        src={launch.links.mission_patch ? launch.links.mission_patch : noimg}
        alt=""
      />

      <h4>FalconSat #1</h4>

      <h5>Mission Ids:</h5>
      <ul>
        <li>Item 1</li>
      </ul>

      <div className="card-text">
        <h5>Launch Year:</h5>
        <span>Something</span>
      </div>
      <div className="card-text">
        <h5>Successful Launch:</h5>
        <span>Something</span>
      </div>
      <div className="card-text">
        <h5>Successful Landing:</h5>
        <span>Something</span>
      </div>
    </div>
  );
};

export default LaunchItem;
