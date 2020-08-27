import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/layout/Header";
import Launch from "./components/launches/Launches";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Launch />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
