import React, { useState, useEffect } from "react";

const LaunchFilter = () => {
  const [years, setYears] = useState(null);

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
                  <a href="/#" className="btn btn-success" key={i}>
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
            <a href="/#" className="btn btn-success">
              True
            </a>
            <a href="/#" className="btn btn-success">
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
            <a href="/#" className="btn btn-success">
              True
            </a>
            <a href="/#" className="btn btn-success">
              False
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LaunchFilter;
