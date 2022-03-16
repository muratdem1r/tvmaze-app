import { useContext } from "react";
import ShowsContext from "../context/shows-context";

import styles from "./FilterButton.module.css";

const FilterButton = (props) => {
  const ctx = useContext(ShowsContext);

  const clickHandler = () => {
    document.querySelector("#search-show").value = "";
    ctx.setActiveGenre(props.genre);
  };

  return (
    <button
      className={
        ctx.activeGenre === props.genre
          ? styles.button.concat(" ", styles.active)
          : styles.button
      }
      onClick={clickHandler}
    >
      {props.genre}
    </button>
  );
};

export default FilterButton;
