import styles from './app.module.css';
import { getIngredientsData } from '../../utils/api';
import { burgerIngredientsConfig } from '../../utils/config';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useEffect, useState } from 'react';

import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';

function App() {
  const [ingredientsData, setIngredientsData] = useState([]);
  const [modalOrderState, setModalOrderState] = useState({
    visible: false,
  });
  const [modalIngredientState, setmodalIngredientState] = useState({
    visible: false,
  });
  const [ingredient, setIngredient] = useState({});

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
    setIngredient(data)
    setmodalIngredientState({ visible: true });
  };

  const handleCloseModalIngredient = () => {
    setmodalIngredientState({ visible: false });
  };

  const handleCreateOrder = () => {
    setModalOrderState({ visible: true });
  };

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients
          data={ingredientsData}
          config={burgerIngredientsConfig}
          openModal={handleOpenModalIngredient}
        />
        <BurgerConstructor
          data={ingredientsData}
          handleCreateOrder={handleCreateOrder}
        />
      </main>
      {modalOrderState.visible && (
        <Modal closeModal={handleCloseModalOrder}>
          <OrderDetails />
        </Modal>
      )}
      {modalIngredientState.visible && (
        <Modal closeModal={handleCloseModalIngredient} title={'Детали ингредиента'}>
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
    </>
  );
}

export default App;
