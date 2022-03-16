import { useEffect, useContext } from "react";

import Button from "./FilterButton";
import ShowsContext from "../context/shows-context";
import Search from "./Search";

const Filter = ({ setCurrentPage }) => {
  const ctx = useContext(ShowsContext);

  useEffect(() => {
    if (ctx.activeGenre === "All") {
      ctx.setFiltered(ctx.shows);
      return;
    }
    const filtered = ctx.shows.filter((show) =>
      show.genres.includes(ctx.activeGenre)
    );
    ctx.setFiltered(filtered);
  }, [ctx.activeGenre]);

  return (
    <div className="filter-list">
      <Button genre="All" />
      <Button genre="Action" />
      <Button genre="Drama" />
      <Button genre="Comedy" />
      <Search setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Filter;
