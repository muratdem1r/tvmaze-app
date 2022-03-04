import { useContext } from "react";
import ShowsContext from "../context/shows-context";

import styles from "./FilterButton.module.css";

const FilterButton = (props) => {
  const ctx = useContext(ShowsContext);
  return (
    <button
      className={
        ctx.activeGenre === props.genre
          ? styles.button.concat(" ", styles.active)
          : styles.button
      }
      onClick={() => ctx.setActiveGenre(props.genre)}
    >
      {props.genre}
    </button>
  );
};

export default FilterButton;
