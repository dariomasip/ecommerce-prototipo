import { addToCart } from "@/helpers/addToCart";
import styles from "./CardItem.module.css";


const CardItem = ({titulo,marca,precio}) => {
    return(
        <article className={styles.container}>
            <figure className={styles.container__figure}>
                <img className={styles.container__figure__imagen} src="/images/product.webp" alt="" />
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
            <button onClick={() => addToCart({titulo, marca, precio})}>Añadir al carrito</button>
        </article>
    )
}

export { CardItem };