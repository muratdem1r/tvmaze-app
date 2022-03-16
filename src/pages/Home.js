import React, { useContext, useState } from "react";
import ShowsContext from "../context/shows-context";
import Pagination from "../components/ui/Pagination";
import Filter from "../components/Filter";
import Shows from "../components/Shows";

const HomePage = () => {
  const ctx = useContext(ShowsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [showsPerPage] = useState(20);

  // Get current shows
  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = ctx.filtered.slice(indexOfFirstShow, indexOfLastShow);

  // Change page
  const paginate = (e, number) => {
    e.preventDefault();
    setCurrentPage(number);
    window.scrollTo(0, 0);
  };

  return (
    <div className="container">
      <Filter setCurrentPage={setCurrentPage} />
      <Shows currentShows={currentShows} />
      <Pagination
        showsPerPage={showsPerPage}
        totalShows={ctx.filtered.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default HomePage;
