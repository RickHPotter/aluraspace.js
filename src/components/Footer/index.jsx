import React from "react";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <a
          href="https://www.facebook.com/AluraCursosOnline/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/facebook.svg" alt="facebook icon" />
        </a>
        <a
          href="https://twitter.com/aluraonline?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/twitter.svg" alt="twitter icon" />
        </a>
        <a
          href="https://www.instagram.com/aluraonline/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/instagram.svg" alt="instagram icon" />
        </a>
      </div>
      <p>Desenvolvido por Alura</p>
    </footer>
  );
};
