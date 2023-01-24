import ShoppingCart from "@/helpers/ShoppingCart";
import styles from "./CardItem.module.css";


const CardItem = ({id,titulo,marca,precio,image}) => {
    return(
        <article className={styles.container}>
            <figure className={styles.container__figure}>
                <img className={styles.container__figure__imagen} src={image} alt="" />
            </figure>
            <div className={styles.container__detail}>
                <div>
                    <h4 className={styles.container__detail__title}>{titulo}</h4>
                    <span>{marca}</span>
                </div>
                <div>
                    <span className={styles.container__detail__price}>$ {precio} USD</span>
                </div>
            </div>
            <button onClick={() => ShoppingCart.addItem({id,titulo, marca, precio})}>Añadir al carrito</button>
        </article>
    )
}

export { CardItem };