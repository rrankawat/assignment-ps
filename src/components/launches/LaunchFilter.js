import React, { useState, useEffect } from "react";

const LaunchFilter = ({ launchFilter }) => {
  const [years, setYears] = useState(null);

  const [filter, setFilter] = useState({
    year: null,
    launch: null,
    landing: null,
  });

  useEffect(() => {
    const years = [
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
    ];
    const results = [];

    for (let i = 0; i < years.length; i += 2) {
      results.push(years.slice(i, i + 2));
    }

    setYears(results);
  }, []);

  const launchYear = (e, y) => {
    e.preventDefault();

    setFilter({ ...filter, year: y });

    const data = {
      year: y,
      launch: filter.launch,
      landing: filter.landing,
    };
    launchFilter(data);
  };

  const successfulLaunch = (e, success) => {
    e.preventDefault();

    setFilter({ ...filter, launch: success });

    const data = {
      year: filter.year,
      launch: success,
      landing: filter.landing,
    };
    launchFilter(data);
  };

  const successfulLanding = (e, success) => {
    e.preventDefault();

    setFilter({ ...filter, landing: success });

    const data = {
      year: filter.year,
      launch: filter.launch,
      landing: success,
    };
    launchFilter(data);
  };

  return (
    <aside className="sidebar">
      <h4>Filters</h4>
      <div className="filter">
        <p className="filter-name">Launch Year</p>
        <span className="underline"></span>
        <div className="years">
          {years &&
            years.map((year, index) => (
              <div className="row" key={index}>
                {year.map((val, i) => (
                  <a
                    href="/#"
                    className={`btn btn-success ${
                      filter.year === val ? "active" : ""
                    }`}
                    key={i}
                    onClick={(e) => launchYear(e, val)}
                  >
                    {val}
                  </a>
                ))}
              </div>
            ))}
        </div>
      </div>

      <div className="filter">
        <p className="filter-name">Successful Launch</p>
        <span className="underline"></span>
        <div className="years">
          <div className="row">
            <a
              href="/#"
              className={`btn btn-success ${
                filter.launch === true ? "active" : ""
              }`}
              onClick={(e) => successfulLaunch(e, true)}
            >
              True
            </a>
            <a
              href="/#"
              className={`btn btn-success ${
                filter.launch === false ? "active" : ""
              }`}
              onClick={(e) => successfulLaunch(e, false)}
            >
              False
            </a>
          </div>
        </div>
      </div>

      <div className="filter">
        <p className="filter-name">Successful Landing</p>
        <span className="underline"></span>
        <div className="years">
          <div className="row">
            <a
              href="/#"
              className={`btn btn-success ${
                filter.landing === true ? "active" : ""
              }`}
              onClick={(e) => successfulLanding(e, true)}
            >
              True
            </a>
            <a
              href="/#"
              className={`btn btn-success ${
                filter.landing === false ? "active" : ""
              }`}
              onClick={(e) => successfulLanding(e, false)}
            >
              False
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LaunchFilter;
