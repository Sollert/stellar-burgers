import { useEffect, useReducer, useState } from 'react';

import { BurgerIngredientsContext } from '../../services/contexts/burger-ingredients-context';
import { BurgerConstructorContext } from '../../services/contexts/burger-constructor-context';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';

import { getIngredientsData } from '../../utils/api';
import { burgerIngredientsConfig } from '../../utils/config';

import {
  inititalCartState,
  cartReducer,
} from '../../services/reducers/burger-cart-reducer';

import styles from './app.module.css';

function App() {
  const [cart, cartDispatch] = useReducer(cartReducer, inititalCartState);
  const [ingredientsData, setIngredientsData] = useState([]);
  const [modalOrderState, setModalOrderState] = useState({
    visible: false,
  });
  const [modalIngredientState, setmodalIngredientState] = useState({
    visible: false,
  });
  const [ingredient, setIngredient] = useState({});
  const [orderDetails, setOrderDetails] = useState();

  useEffect(() => {
    const getIngredients = async () => {
      try {
        const res = await getIngredientsData();
        setIngredientsData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getIngredients();
  }, []);

  const handleCloseModalOrder = () => {
    setModalOrderState({ visible: false });
  };

  const handleOpenModalIngredient = (data) => {
    setIngredient(data);
    setmodalIngredientState({ visible: true });
  };

  const handleCloseModalIngredient = () => {
    setmodalIngredientState({ visible: false });
  };

  const handleOpenOrderModal = () => {
    setModalOrderState({ visible: true });
  };

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerConstructorContext.Provider value={{ cart, cartDispatch }}>
          <BurgerIngredientsContext.Provider
            value={{ ingredientsData, setIngredientsData }}
          >
            <BurgerIngredients
              config={burgerIngredientsConfig}
              openModal={handleOpenModalIngredient}
            />
          </BurgerIngredientsContext.Provider>
          <BurgerConstructor openModal={handleOpenOrderModal} setOrderDetails={setOrderDetails}/>
        </BurgerConstructorContext.Provider>
      </main>
      {modalOrderState.visible && (
        <Modal closeModal={handleCloseModalOrder}>
          <OrderDetails number={orderDetails['order'].number}/>
        </Modal>
      )}
      {modalIngredientState.visible && (
        <Modal
          closeModal={handleCloseModalIngredient}
          title={'Детали ингредиента'}
        >
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
    </>
  );
}

export default App;
