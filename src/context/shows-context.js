import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowsContext = React.createContext({
  shows: [],
  filtered: [],
  activeGenre: "All",
  setFiltered: () => {},
  setActiveGenre: () => {},
});

export const ShowsContextProvider = (props) => {
  const [shows, setShows] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState("All");

  useEffect(() => {
    getShows();
  }, []);

  const getShows = async () => {
    try {
      const response = await axios.get("https://api.tvmaze.com/shows");
      setShows(response.data);
      setFiltered(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ShowsContext.Provider
      value={{
        shows,
        filtered,
        activeGenre,
        setActiveGenre,
        setFiltered,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsContext;
