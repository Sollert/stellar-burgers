import styles from './burger-ingredients-type.module.css';
import BurgerIngredientsCardList from '../burger-ingredients-card-list/burger-ingredients-card-list';
import { forwardRef } from 'react';

const BurgerIngredientsType = forwardRef(({data, type}, ref) => {
  return (
    <li>
      <h3 className={`${styles.card__head} text text_type_main-medium`} ref={ref}>
        {data[type].title}
      </h3>
      <ul className={styles.list}>
        <BurgerIngredientsCardList data={data} type={type} />
      </ul>
    </li>
  );
});

export default BurgerIngredientsType;