import styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/assets/logo.png" alt="Alura Space Logo" />
      <div className={styles.header__container}>
        <input
          className={styles.header__input}
          type="text"
          placeholder="What are you looking for?"
          name="header-input"
        />
        <img src="/assets/search.png" alt="search icon" />
      </div>
    </header>
  );
};
