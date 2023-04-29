import styles from './burger-constructor-order-submit.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructorOrderSubmit = ({totalPrice}) => {
  return (
    <div className={`${styles.submit__container} mr-4`}>
      <p className={styles.price__container}>
        <span className="text text_type_digits-medium">{totalPrice}</span>
        <CurrencyIcon type="primary" />
      </p>
      <Button htmlType="button" type="primary" size="large">
        Оформить заказ
      </Button>
    </div>
  );
};

export default BurgerConstructorOrderSubmit;