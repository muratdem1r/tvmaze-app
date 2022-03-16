import React, { useEffect } from "react";
import styles from "./ShowDetail.module.css";
import LoadingSpinner from "./ui/loading";

const Show = (props) => {
  const show = props.show;

  const div = document.createElement("div");
  div.innerHTML = show.summary;
  const summary = div.firstChild;

  if (show.length === 0) {
    return <LoadingSpinner />;
  }
  return (
    <div className={styles["show-details"]}>
      {show.image && (
        <img
          className={styles["bg-img"]}
          src={show.image.original}
          alt={show.name}
        />
      )}
      <div className={styles.show}>
        <div className={styles["img-container"]}>
          <img
            src={show.image ? show.image.medium : "/tvmaze.jpg"}
            alt={show.name}
          />
        </div>
        <div className={styles["details-container"]}>
          <h1>{show.name}</h1>
          <p
            className={styles.summary}
            dangerouslySetInnerHTML={{ __html: summary.innerHTML }}
          />
          <div className={styles.info}>
            <div>&#9734;{show.rating.average}</div>
            <div>{show.language}</div>
            <div>Status: {show.status}</div>
          </div>
          <div className={styles.genres}>
            <span>Genres: </span>
            <ul>
              {show.genres.map((genre, index) => {
                return <li key={index}>{genre}</li>;
              })}
            </ul>
          </div>
          <a
            target="_blank"
            href={show.url}
            alt={show.name}
            className={styles["more-info"]}
          >
            More info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Show;
