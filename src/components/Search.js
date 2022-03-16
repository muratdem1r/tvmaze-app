import { useContext, useEffect, useState } from "react";
import ShowsContext from "../context/shows-context";
import axios from "axios";

const Search = ({ setCurrentPage }) => {
  const ctx = useContext(ShowsContext);
  const [searchedData, setSearchedData] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      ctx.setActiveGenre("None");
      setCurrentPage(1);
      if (searchedData.length === 0) {
        ctx.setActiveGenre("All");
        ctx.setFiltered(ctx.shows);
      } else {
        const getSearchedData = async (e) => {
          const query = "https://api.tvmaze.com/search/shows?q=" + searchedData;
          try {
            const response = await axios.get(query);

            let searched = [];
            response.data.filter((data) => {
              searched.push(data.show);
            });
            ctx.setFiltered(searched);
          } catch (error) {
            console.error(error);
          }
        };
        getSearchedData();
      }
    }, 500);

    return () => clearTimeout(delay);
  }, [searchedData]);

  return (
    <input
      id="search-show"
      autoFocus
      placeholder="Search.."
      autoComplete="off"
      type="search"
      onChange={(e) => setSearchedData(e.target.value)}
    ></input>
  );
};

export default Search;
