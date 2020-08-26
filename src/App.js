import React from "react";
import Header from "./components/layout/Header";
import Launch from "./components/launch/Launch";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Launch />
      <Footer />
    </div>
  );
};

export default App;
