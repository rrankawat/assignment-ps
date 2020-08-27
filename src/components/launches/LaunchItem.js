import React from "react";
import PropTypes from "prop-types";
import Img from "react-cool-img";
import loadingImage from "./loading.gif";
import noimg from "./no-img.png";

const LaunchItem = ({ launch }) => {
  const {
    links,
    mission_name,
    flight_number,
    mission_id,
    launch_year,
    launch_success,
    rocket,
  } = launch;

  return (
    <div className="card">
      <Img
        placeholder={loadingImage}
        src={links.mission_patch ? links.mission_patch : noimg}
        alt={mission_name}
      />

      <h4>
        {mission_name} #{flight_number}
      </h4>

      <h5>Mission Ids:</h5>
      <ul>
        {mission_id.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div className="card-text">
        <h5>Launch Year:</h5>
        <span>{launch_year}</span>
      </div>
      <div className="card-text">
        <h5>Successful Launch:</h5>
        <span>{launch_success ? "true" : "false"}</span>
      </div>

      <h5>Successful Landing:</h5>
      <ul>
        {rocket.first_stage.cores.map(
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

LaunchItem.propTypes = {
  launch: PropTypes.object.isRequired,
};

export default LaunchItem;
