
import React, {useState} from 'react';
import { Button, Input} from '../UI';
import styles from './ProductCard.module.scss';

const ProductCard = (props) => {
  //using State to have a controlled component
  const [quantity, setQuantity] = useState(props.quantity);

  return (
    <li className={styles.ProductCard}>
      <div className={styles.ProductCard__description}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <span className={styles.ProductCard__price}>{`${props.price}  €`}</span>
      </div>
      <div className={styles.ProductCard__controls}>
        <Input
          value={quantity}
          label={"Amount"}
          onChange={(e) => { setQuantity(+e.target.value) } }
          id={props.id} />
        <Button onClick={() => { props.onAdd(props.id, quantity) }}>+ Add</Button>
      </div>
    </li>
  )
}
export default ProductCard;