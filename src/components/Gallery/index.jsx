import { useState } from "react";
import { Tags } from "../Tags";
import { Cards } from "./Cards";
import pics from "./pics.json";

import styles from "./gallery.module.scss";

export const Gallery = () => {
  const [itens, setItens] = useState(pics);
  const tags = [...new Set(pics.map((pic) => pic.tag))];

  const filterPics = (tag) => {
    if (itens.length !== pics.length && itens[0].tag === tag) {
      setItens(pics);
      return
    }
    const newPics = pics.filter((pic) => pic.tag === tag);
    setItens(newPics);
  }

  return (
    <section className={styles.gallery}>
      <h2>Explore the Gallery</h2>
      <Tags onFilter={filterPics} tags={tags} />
      <Cards pics={itens} />
    </section>
  );
};
