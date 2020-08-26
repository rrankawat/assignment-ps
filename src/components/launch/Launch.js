import React from "react";
import LaunchFilter from "./LaunchFilter";
import LaunchItem from "./LaunchItem";

const Launch = () => {
  return (
    <main className="main">
      <LaunchFilter />

      <section className="content">
        <LaunchItem />
      </section>
    </main>
  );
};

export default Launch;
