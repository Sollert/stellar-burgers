import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

import styles from './burger-constructor-order-submit.module.css';

const BurgerConstructorOrderSubmit = ({ totalPrice, handleCreateOrder }) => {
  return (
    <div className={`${styles.submit__container} mr-4`}>
      <p className={styles.price__container}>
        <span className="text text_type_digits-medium">{totalPrice}</span>
        <CurrencyIcon type="primary" />
      </p>
      <Button
        htmlType="button"
        type="primary"
        size="large"
        onClick={handleCreateOrder}
      >
        Оформить заказ
      </Button>
    </div>
  );
};

BurgerConstructorOrderSubmit.propType = {
  totalPrice: PropTypes.number.isRequired,
  handleCreateOrder: PropTypes.func.isRequired,
};

export default BurgerConstructorOrderSubmit;
