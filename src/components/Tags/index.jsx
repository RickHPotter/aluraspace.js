import styles from './tags.module.scss'

export const Tags = () => {
  return (
    <div className={styles.tags}>
      <p>Filter:</p>
      <ul className={styles.tags__list}>
        <li>Stars</li>
        <li>Galaxies</li>
        <li>Moons</li>
        <li>Planets</li>
      </ul>
    </div>
  )
}
