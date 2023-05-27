import styles from "./tags.module.scss";

export const Tags = ({ tags, onFilter }) => {

  return (
    <div className={styles.tags}>
      <p>Filter:</p>
      <ul className={styles.tags__list}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => onFilter(tag)}>
              {tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
