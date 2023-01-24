import styles from "./Feed.module.css";

const Feed = ({children}) => {
    return(
        <section className={styles.container}>
            <div className={styles.container__encabezado}>
                <h2>Los más vendidos</h2>
            </div>
            <div className={styles.container__encabezado__grid}>
                { children }
            </div>
        </section>
    )
}

export { Feed };