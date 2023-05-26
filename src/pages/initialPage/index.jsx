import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";

import styles from "./initialPage.module.scss";

export const InitialPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className={styles.main}>
          <Menu />
          <div className={styles.main__image}>
            <h1>The Most Complete Space Gallery.</h1>
            <img
              src="/assets/banner.png"
              alt="alura space banner"
            />
          </div>
        </section>
      </main>
    </>
  );
};
