import styles from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorToppingsList from '../burger-constructor-toppings-list/burger-constructor-toppings-list';
import BurgerConstructorOrderSubmit from '../burger-constructor-order-submit/burger-constructor-order-submit';

const BurgerConstructor = ({ data }) => {
  return (
    <section className={styles.section__container}>
      <ul className={`${styles.ingredients__container}`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${data[0].name} (верх)`}
          price={data[0].price}
          thumbnail={data[0].image}
        />
        <ul className={styles.toppings__container}>
          <BurgerConstructorToppingsList data={data} />
        </ul>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${data[0].name} (низ)`}
          price={data[0].price}
          thumbnail={data[0].image}
        />
      </ul>
      <BurgerConstructorOrderSubmit totalPrice={610} />
    </section>
  );
};

export default BurgerConstructor;
