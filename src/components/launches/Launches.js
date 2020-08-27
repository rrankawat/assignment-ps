import React, { useState, useEffect, Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

import LaunchFilter from "./LaunchFilter";
import LaunchItem from "./LaunchItem";
import Spinner from "../layout/spinner/Spinner";

const Launches = () => {
  const [launches, setLaunches] = useState(null);
  const history = useHistory();
  const { search } = useLocation();

  const loadDefault = async () => {
    const res = await axios.get(
      `https://api.spaceXdata.com/v3/launches?limit=100`
    );
    setLaunches(res.data);
  };

  const loadFromURL = async (launch, landing, year) => {
    const query = getQuery(launch, landing, year);

    let url = `https://api.spaceXdata.com/v3/launches?limit=100&${query.join(
      "&"
    )}`;
    const res = await axios.get(url);
    setLaunches(res.data);
  };

  useEffect(() => {
    const queryString = new URLSearchParams(search);
    const launch = queryString.get("launch_success");
    const landing = queryString.get("land_success");
    const year = queryString.get("launch_year");

    if (launch !== null || landing !== null || year !== null) {
      loadFromURL(launch, landing, year);
    } else {
      loadDefault();
    }

    // eslint-disable-next-line
  }, []);

  const getQuery = (launch, landing, year) => {
    const query = [];

    if (launch !== null) {
      query.push(`launch_success=${launch}`);
    }
    if (landing !== null) {
      query.push(`land_success=${landing}`);
    }
    if (year !== null) {
      query.push(`launch_year=${year}`);
    }

    return query;
  };

  const launchFilter = async (filter) => {
    setLaunches(null);

    const query = getQuery(filter.launch, filter.landing, filter.year);

    let url = `https://api.spaceXdata.com/v3/launches?limit=100&${query.join(
      "&"
    )}`;
    const res = await axios.get(url);

    // update url
    history.push(`/?${query.join("&")}`);

    setLaunches(res.data);
  };

  return (
    <main className="main">
      <LaunchFilter launchFilter={launchFilter} />

      {launches ? (
        <Fragment>
          {launches.length > 0 ? (
            <section className="content">
              {launches.map((launch) => (
                <LaunchItem key={launch.flight_number} launch={launch} />
              ))}
            </section>
          ) : (
            <div className="no-data">No data to display</div>
          )}
        </Fragment>
      ) : (
        <Spinner />
      )}
    </main>
  );
};

export default Launches;
