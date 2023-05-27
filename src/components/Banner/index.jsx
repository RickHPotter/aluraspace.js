import styles from "./banner.module.scss";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1>The Most Complete Space Gallery.</h1>
      <img src="/assets/banner.png" alt="alura space banner" />
    </div>
  );
};
