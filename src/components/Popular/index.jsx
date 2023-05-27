import styles from "./popular.module.scss";

import pics from "./pics.json";

export const Popular = () => {
  return (
    <aside className={styles.popular}>
      <h2>Popular</h2>
      <ul className={styles.popular__images}>
        {pics.map((pic) => {
          return (
            <li key={pic.id}>
              <img src={pic.path} alt={pic.alt} />
            </li>
          );
        })}
      </ul>
      <button>See More</button>
    </aside>
  );
};
