import styles from './card.module.scss'

export const Card = ({ pic }) => {
  return (
    <li key={pic.id} className={styles.gallery__card}>
      <img className={styles.gallery__image} src={pic.image} alt={pic.title} />
      <p className={styles.gallery__desc}>{pic.title}</p>
      <div>
        <p>{pic.credits}</p>
        <span>
          <img src="/assets/favourite.png" alt="favourite heart icon" />
          <img src="/assets/open.png" alt="open modal icon" />
        </span>
      </div>
    </li>
  );
};
