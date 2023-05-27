import styles from './cards.module.scss'
import { Card } from './Card';

export const Cards = ({ pics }) => {
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
