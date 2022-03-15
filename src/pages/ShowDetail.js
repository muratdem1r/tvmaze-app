import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowsContext from "../context/shows-context";

// component
import ShowDetail from "../components/ShowDetail";

const HomePage = () => {
  const params = useParams();
  const ctx = useContext(ShowsContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      {ctx.filtered
        .filter((show) => {
          return show.id === parseInt(params.id);
        })
        .map((show) => {
          return <ShowDetail show={show} key={show.id} />;
        })}
    </React.Fragment>
  );
};

export default HomePage;
