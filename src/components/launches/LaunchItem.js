import React from "react";
import noimg from "./no-img.png";

const LaunchItem = ({ launch }) => {
  return (
    <div className="card">
      <img
        src={launch.links.mission_patch ? launch.links.mission_patch : noimg}
        alt={launch.mission_name}
      />

      <h4>
        {launch.mission_name} #{launch.flight_number}
      </h4>

      <h5>Mission Ids:</h5>
      <ul>
        {launch.mission_id.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div className="card-text">
        <h5>Launch Year:</h5>
        <span>{launch.launch_year}</span>
      </div>
      <div className="card-text">
        <h5>Successful Launch:</h5>
        <span>{launch.launch_success ? "true" : "false"}</span>
      </div>

      <h5>Successful Landing:</h5>
      <ul>
        {launch.rocket.first_stage.cores.map(
          (item, i) =>
            item.land_success !== null && (
              <li key={i}>
                flight {item.flight} - {item.land_success ? "true" : "false"}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default LaunchItem;
