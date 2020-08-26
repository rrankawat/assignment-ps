import React, { useState, useEffect } from "react";
import axios from "axios";

import LaunchFilter from "./LaunchFilter";
import LaunchItem from "./LaunchItem";
import Spinner from "../layout/spinner/Spinner";

const Launch = () => {
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

  return (
    <main className="main">
      <LaunchFilter />

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

export default Launch;
