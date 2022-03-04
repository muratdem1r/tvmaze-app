import React from "react";

//components

import Filter from "../components/Filter";
import Shows from "../components/Shows";

const HomePage = () => {
  return (
    <div className="container">
      <Filter />
      <Shows />
    </div>
  );
};

export default HomePage;
