import PropTypes from 'prop-types';

import styles from './order-details.module.css';

const OrderDetails = ({ number }) => {
  return (
    <div className={`${styles.order__container} mb-30 mt-30`}>
      <span className="text text_type_main-mediumtext text_type_digits-large mb-8">
        {number}
      </span>
      <p className="text text_type_main-medium mb-15">Идентификатор заказа</p>
      <div className={styles.order__doneImage}></div>
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

OrderDetails.propTypes = {
  number: PropTypes.number.isRequired,
};

export default OrderDetails;
