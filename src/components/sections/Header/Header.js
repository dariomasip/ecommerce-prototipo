import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const Header = ({ shoppingCart }) => {
  return (
    <header className={styles.container}>
      <figure className={styles.container__logo}>
        <img src="/images/Logo/samsung.png" alt="Logo de Samsung"></img>
      </figure>
      <div className={styles.container__categories}>
        <ul className={styles.container__categories__list}>
          <li>Móviles</li>
          <li>TV & AV</li>
          <li>Electrodomésticos</li>
          <li>Pantallas</li>
          <li>Tienda Online</li>
        </ul>
      </div>
      <div className={styles.container__categories}>
        <ul className={styles.container__categories__list}>
          <li>Soporte</li>
          <li>Para Negocios</li>
        </ul>
      </div>
      <div className={styles.container__profile}>
        <img src="/images/iconos/search.svg" alt="Buscar" />
        <img src="/images/iconos/shopping_cart.svg" alt="Buscar" />
        {shoppingCart?.length && (
          <span className={styles.cantidadItems}>{shoppingCart.length}</span>
        )}
        <img src="/images/iconos/account.svg" alt="Buscar" />
      </div>
    </header>
  );
};

export { Header };
