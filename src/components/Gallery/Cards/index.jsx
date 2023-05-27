import styles from './cards.module.scss'
import pics from "../pics.json";
import { Card } from './Card';

export const Cards = () => {
  return (
    <ul className={styles.gallery__cards}>
    {pics.map((pic) => {
      return (
        <Card key={pic.id} pic={pic} /> 
      );
    })}
  </ul>
  )
};
