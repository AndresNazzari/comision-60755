/* eslint-disable react/prop-types */
import styles from './Item.module.css'

export const Item = ({id, name, description, price, image}) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.item__info}>
        <h2 className={styles.item__info__title}>{name}</h2>
        <p className={styles.item__info__price}>${price}</p>
            <a href='#'>Ver Detalles</a>
        </div>
    </div>
  )
}
