import Show from "./Show";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import ShowsContext from "../context/shows-context";

import styles from "./Shows.module.css";

const Shows = () => {
  const ctx = useContext(ShowsContext);
  return (
    <motion.ul layout className={styles.show_list}>
      <AnimatePresence>
        {ctx.filtered.length === 0 && <p>No matching shows found.</p>}
        {ctx.filtered.map((show) => {
          return <Show show={show} key={show.id} />;
        })}
      </AnimatePresence>
    </motion.ul>
  );
};

export default Shows;
