import styles from './menu.module.scss'

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <img src="/assets/icons/home-active.png" alt="home" />
          <a href="####">Home</a>
        </li>
        <li className={styles.menu__item}>
          <img src="/assets/icons/liked-inactive.png" alt="liked" />
          <a href="##">Liked</a>
        </li>
        <li className={styles.menu__item}>
          <img src="/assets/icons/popular-inactive.png" alt="popular" />
          <a href="##">Popular</a>
        </li>
        <li className={styles.menu__item}>
          <img src="/assets/icons/new-inactive.png" alt="new" />
          <a href="##">New</a>
        </li>
        <li className={styles.menu__item}>
          <img src="/assets/icons/surprise-me-inactive.png" alt="surprise me" />
          <a href="##">Suprise Me</a>
        </li>
      </ul>
    </nav>
  )
}