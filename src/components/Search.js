import { useContext, useEffect, useState } from "react";
import ShowsContext from "../context/shows-context";
import axios from "axios";

const Search = () => {
  const ctx = useContext(ShowsContext);
  const [searchedData, setSearchedData] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchedData.length === 0) {
        ctx.setFiltered(ctx.shows);
      } else {
        const getSearchedData = async (e) => {
          const query = "https://api.tvmaze.com/search/shows?q=" + searchedData;
          try {
            const response = await axios.get(query);

            let searchedData = [];
            response.data.filter((data) => {
              searchedData.push(data.show);
            });
            ctx.setFiltered(searchedData);
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
      autoFocus
      placeholder="Search.."
      autoComplete="off"
      type="search"
      onChange={(e) => setSearchedData(e.target.value)}
    ></input>
  );
};

export default Search;
