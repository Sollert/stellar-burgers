import styles from './burger-ingredients-type.module.css';
import BurgerIngredientsCardsList from '../burger-ingredients-cards-list/burger-ingredients-cards-list';
import { forwardRef } from 'react';

const BurgerIngredientsType = forwardRef(({ data, type, config }, ref) => {
  return (
    <li>
      <h3
        className={`${styles.card__title} text text_type_main-medium`}
        ref={ref}
      >
        {config[type].title}
      </h3>
      <ul className={styles.type__list}>
        <BurgerIngredientsCardsList data={data} type={type} />
      </ul>
    </li>
  );
});

export default BurgerIngredientsType;
