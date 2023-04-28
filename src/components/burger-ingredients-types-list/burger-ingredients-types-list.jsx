import styles from './burger-ingredients-types-list.module.css';
import BurgerIngredientsType from '../burger-ingredients-type/burger-ingredients-type';

const BurgerIngredientsTypesList = ({ data, bunRef, sauceRef, mainRef }) => {
  return (
    <ul className={styles.container}>
      <BurgerIngredientsType data={data} type={'bun'} ref={bunRef} />
      <BurgerIngredientsType data={data} type={'sauce'} ref={sauceRef} />
      <BurgerIngredientsType data={data} type={'main'} ref={mainRef} />
    </ul>
  );
};

export default BurgerIngredientsTypesList;
