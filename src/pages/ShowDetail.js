import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowsContext from "../context/shows-context";
import axios from "axios";

// component
import ShowDetail from "../components/ShowDetail";

const HomePage = () => {
  const params = useParams();
  const ctx = useContext(ShowsContext);
  const [show, setShow] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getShow = async () => {
      const query = "https://api.tvmaze.com/shows/" + params.id;
      try {
        const response = await axios.get(query);
        setShow(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getShow();
  }, []);

  return <ShowDetail show={show} key={show.id} />;
};

export default HomePage;
