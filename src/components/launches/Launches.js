import React, { useState, useEffect } from "react";
import axios from "axios";

import LaunchFilter from "./LaunchFilter";
import LaunchItem from "./LaunchItem";
import Spinner from "../layout/spinner/Spinner";

const Launches = () => {
  const [launches, setLaunches] = useState(null);

  useEffect(() => {
    const getLaunches = async () => {
      const res = await axios.get(
        `https://api.spaceXdata.com/v3/launches?limit=100`
      );

      setLaunches(res.data);
    };

    getLaunches();
  }, []);

  const launchFilter = async (filter) => {
    setLaunches(null);

    const launch_year =
      filter.year !== null ? `&launch_year=${filter.year}` : "";
    const launch_success =
      filter.launch !== null ? `&launch_success=${filter.launch}` : "";
    const land_success =
      filter.landing !== null ? `&land_success=${filter.landing}` : "";

    let url = `https://api.spaceXdata.com/v3/launches?limit=100${launch_success}${land_success}${launch_year}`;

    const res = await axios.get(url);
    setLaunches(res.data);
  };

  return (
    <main className="main">
      <LaunchFilter launchFilter={launchFilter} />

      {launches ? (
        <section className="content">
          {launches.length > 0 &&
            launches.map((launch) => (
              <LaunchItem key={launch.flight_number} launch={launch} />
            ))}
        </section>
      ) : (
        <Spinner />
      )}
    </main>
  );
};

export default Launches;
