import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ShowsContext from "../context/shows-context";

// component
import ShowDetail from "../components/ShowDetail";

const HomePage = () => {
  const params = useParams();
  const ctx = useContext(ShowsContext);

  return (
    <React.Fragment>
      {ctx.shows
        .filter((show) => {
          return show.id == params.id;
        })
        .map((show) => {
          return <ShowDetail show={show} key={show.id} />;
        })}
    </React.Fragment>
  );
};

export default HomePage;
