import styles from "./ShowDetail.module.css";

const Show = (props) => {
  const show = props.show;
  console.log(show);
  function escapeHtml(unsafe) {
    return unsafe
      .replace(/<p[^>]*>/g, "")
      .replace(/<\/p>/g, "")
      .replace(/<b[^>]*>/g, "")
      .replace(/<\/b>/g, "");
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
          {show.image && <img src={show.image.medium} alt={show.name} />}
        </div>
        <div className={styles["details-container"]}>
          <h1>{show.name}</h1>
          <p className={styles.summary}>{escapeHtml(show.summary)}</p>
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
