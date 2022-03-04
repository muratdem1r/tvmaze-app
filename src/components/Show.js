import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Show = (props) => {
  const show = props.show;
  const link = "/shows/" + show.id;
  return (
    <motion.li
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="show-item"
    >
      <Link to={link}>
        <img src={show.image.medium} alt={show.name} />
      </Link>
      <h2>{show.name}</h2>
    </motion.li>
  );
};

export default Show;
