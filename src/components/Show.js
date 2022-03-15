import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Shows from "./Shows";
import styles from "./Shows.module.css";

const Show = (props) => {
  const show = props.show;
  const link = "/shows/" + show.id;

  return (
    <motion.li
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className={styles.show_item}
    >
      <Link to={link}>
        <img
          src={show.image ? show.image.medium : "/tvmaze.jpg"}
          alt={show.name}
        />
      </Link>
      <h2>{show.name}</h2>
    </motion.li>
  );
};

export default Show;
