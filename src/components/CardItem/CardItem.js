import ShoppingCart from "@/helpers/ShoppingCart";
import { useEffect, useState } from "react";
import styles from "./CardItem.module.css";

const CardItem = ({ id, titulo, marca, precio, image, itemShoppingCart }) => {
  return (
    <article className={styles.container}>
      {itemShoppingCart[0]?.cantidad && (
        <span className={styles.cantidadItems}>
          {itemShoppingCart[0]?.cantidad}
        </span>
      )}
      <figure className={styles.container__figure}>
        <img className={styles.container__figure__imagen} src={image} alt="" />
      </figure>
      <div className={styles.container__detail}>
        <div>
          <h4 className={styles.container__detail__title}>{titulo}</h4>
          <span>{marca}</span>
        </div>
        <div>
          <span className={styles.container__detail__price}>
            $ {precio} USD
          </span>
        </div>
      </div>
      <button
        className={styles.container__detail__addCart}
        onClick={() =>
          ShoppingCart.addItem({ cantidad: 1, id, titulo, marca, precio })
        }
      >
        Añadir al carrito
      </button>
    </article>
  );
};

export { CardItem };
