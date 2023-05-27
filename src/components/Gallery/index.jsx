import { Tags } from "../Tags";
import { Cards } from "./Cards";
import styles from "./gallery.module.scss";

export const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <h2>Explore the Gallery</h2>
      <Tags />
      <Cards />
    </section>
  );
};
